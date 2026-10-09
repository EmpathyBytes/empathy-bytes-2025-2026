const path = require('path');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

const DRUPAL_BASE_URL = 'https://empathybytes.library.gatech.edu';

exports.onCreateWebpackConfig = ({
  // rules,
  // loaders,
  // plugins,
  actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(glb|gltf)$/i,
          use: {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          }
        },
      ]
    }
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type OlympicsTimelineEventUrl {
      value: String
    }

    type node__olympics_timeline_event implements Node {
      field_field_event_subtitle: String
      field_field_event_url: OlympicsTimelineEventUrl
    }

    type node__olympics_gallery_image implements Node {
      field_caption: String
      field_date: Date @dateformat
    }

    type file__file implements Node {
      localImage: File @link(from: "fields.localImage")
    }
  `);
};

/**
 * DRUPAL IMAGES
 * skipFileDownloads keeps Drupal files remote, so pages used to load every 1-2 MB
 * original in the browser even where it's shown as a small thumbnail. Download only
 * the images these content types use, at build time, so gatsby-plugin-image can
 * generate small WebP versions as static files (works on GitHub Pages, unlike the
 * Image CDN URLs, which need a server). Pages render them with drupalImageProps().
 *
 * With PARALLEL_SOURCING, a content node can be created before or after the file it
 * references, so both orders are handled here.
 */
const IMAGE_FIELDS = {
  node__olympics_gallery_image: 'field_olympic_gallery_image',
  node__team_members: 'field_pfp',
  node__collection: 'field_image',
  node__article: 'field_image',
  media__hg_image: 'field_media_hg_image', // Olympic timeline event images
};
const imageFileIds = new Set();
const downloadedFileIds = new Set();

const downloadImage = async (fileNode, { actions, createNodeId, getCache, reporter }) => {
  if (downloadedFileIds.has(fileNode.id)) return;
  downloadedFileIds.add(fileNode.id);

  const fileUrl = fileNode.uri?.url;
  if (!fileUrl || !fileNode.filemime?.startsWith('image/')) return;

  try {
    const localFile = await createRemoteFileNode({
      url: fileUrl.startsWith('http') ? fileUrl : DRUPAL_BASE_URL + fileUrl,
      parentNodeId: fileNode.id,
      createNode: actions.createNode,
      createNodeId,
      getCache,
    });
    actions.createNodeField({ node: fileNode, name: 'localImage', value: localFile.id });
  } catch (error) {
    reporter.warn(`Could not download Drupal image ${fileUrl}: ${error.message}`);
  }
};

exports.onCreateNode = async (args) => {
  const { node, getNode } = args;
  const imageField = IMAGE_FIELDS[node.internal.type];

  if (imageField) {
    const fileId = node.relationships?.[`${imageField}___NODE`];
    if (!fileId) return;

    imageFileIds.add(fileId);
    const fileNode = getNode(fileId);
    if (fileNode) await downloadImage(fileNode, args);
  } else if (node.internal.type === 'file__file' && imageFileIds.has(node.id)) {
    await downloadImage(node, args);
  }
};

// Runs a GraphQL Call
exports.createPages = async ({actions, graphql}) => {
    const { createPage, createRedirect } = actions;

    createRedirect({
      fromPath: "/olympic-timeline",
      toPath: "/projects/olympics/timeline",
      isPermanent: true,
      redirectInBrowser: true,
    });

    createRedirect({
      fromPath: "/olympic-gallery",
      toPath: "/projects/olympics/gallery",
      isPermanent: true,
      redirectInBrowser: true,
    });

    /**
     * GENERATING COLLECTION PAGES
     */
    const collections = await graphql(`
    {
        allNodeCollection {
          nodes {
            title
            path {
                alias
            }
          }
        }
      }
    `);

    if (collections.errors) {
        throw collections.errors;
    }

    collections.data.allNodeCollection.nodes.forEach((collectionData) => {
      const isOlympicsCollection =
        (collectionData.title || "").trim().toLowerCase() === "olympics at georgia tech";

      if (isOlympicsCollection) {
        return;
      }

      if (collectionData.path && collectionData.path.alias) {
        createPage({
          path: "/projects" + collectionData.path.alias,
          component: path.resolve(`src/templates/collection.js`),
          context: {
            CollectionTitle: collectionData.title,
          },
        });
      }
    });

        /**
     * GENERATING ARTICLE PAGES
     */
    // This is specifically for article pages
    const articles = await graphql(`
    {
        allNodeArticle {
          nodes {
            id
            path {
                alias
            }
            relationships {
              field_tags {
                relationships {
                  node__collection {
                    path {
                      alias
                    }
                  }
                }
              }
            }
          }
        }
      }
    `);

    if (articles.errors) {
        throw articles.errors;
    }

    // Looping through the data gathered, creating a page for each component
    articles.data.allNodeArticle.nodes.forEach(articleData => {
        // Validate all required fields exist before creating page
        if (
            articleData.path &&
            articleData.path.alias &&
            articleData.relationships &&
            articleData.relationships.field_tags &&
            articleData.relationships.field_tags.length > 0 &&
            articleData.relationships.field_tags[0].relationships &&
            articleData.relationships.field_tags[0].relationships.node__collection &&
            articleData.relationships.field_tags[0].relationships.node__collection.length > 0 &&
            articleData.relationships.field_tags[0].relationships.node__collection[0].path &&
            articleData.relationships.field_tags[0].relationships.node__collection[0].path.alias
        ) {
            createPage({
                path: "/projects" 
                    + articleData.relationships.field_tags[0].relationships.node__collection[0].path.alias            
                    + articleData.path.alias,
                component: path.resolve(`src/templates/article.js`),
                context: {
                    ArticleId: articleData.id,
                },
            });
        }
    });
}