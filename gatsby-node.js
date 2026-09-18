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
    type node__olympics_timeline_event implements Node {
      field_field_event_subtitle: String
    }
  `);
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type node__olympics_gallery_image implements Node {
      field_caption: String
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
            id
            title
            path {
                alias
            }
          }
        }
      }
    `);

    collections.data.allNodeCollection.nodes.forEach((collectionData) => {
      const isOlympicsCollection =
        (collectionData.title || "").trim().toLowerCase() === "olympics at georgia tech";

      if (isOlympicsCollection) {
        return;
      }

      createPage({
        path: "/projects" + collectionData.path.alias,
        component: path.resolve(`src/templates/collection.js`),
        context: {
          CollectionTitle: collectionData.title,
        },
      });
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
            title
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

    // Looping through the data gathered, creating a page for each component
    articles.data.allNodeArticle.nodes.map(articleData =>
        createPage({
            path: "/projects" 
            + articleData.relationships.field_tags[0].relationships.node__collection[0].path.alias            
            + articleData.path.alias,
            
            component: path.resolve(`src/templates/article.js`),
            context: {
                ArticleId: articleData.id,
            },
        })
    );
}