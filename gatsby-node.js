const path = require('path');

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
  `);
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