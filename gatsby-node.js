const path = require('path');


// Runs a GraphQL Call
exports.createPages = async ({actions, graphql}) => {
    const { createPage } = actions;


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

    //evelyn
    const collections = await graphql(`
    {
        allNodeCollection {
          nodes {
            id
            title
            body {
              processed
            }
            field_image {
              alt
              title
              width
              height
              drupal_internal__target_id
            }
            path {
                alias
            }
          }
        }
      }
    `);

    // Looping through the data gathered, creating a page for each component
    collections.data.allNodeCollection.nodes.map(collectionData =>
        createPage({
            path: "/collections" + collectionData.path.alias,
            component: path.resolve(`src/templates/collection.js`),
            context: {
                CollectionId: collectionData.id,
            },
        })
    );
}