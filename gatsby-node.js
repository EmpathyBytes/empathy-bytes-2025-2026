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

// Runs a GraphQL Call
exports.createPages = async ({actions, graphql}) => {
    const { createPage } = actions;

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

    collections.data.allNodeCollection.nodes.map(collectionData =>
        createPage({
            path: "/projects" + collectionData.path.alias,
            component: path.resolve(`src/templates/collection.js`),
            context: {
                CollectionTitle: collectionData.title,
            },
        })
    );

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