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
          }
        }
      }
    `);

    // Looping through the data gathered, creating a page for each component
    articles.data.allNodeArticle.nodes.map(articleData =>
        createPage({
            path: articleData.path.alias,
            component: path.resolve(`src/templates/article.js`),
            context: {
                ArticleId: articleData.id,
            },
        })
    );


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
            path: "/collections" + collectionData.path.alias,
            component: path.resolve(`src/templates/collection.js`),
            context: {
                CollectionTitle: collectionData.title,
            },
        })
    );
}