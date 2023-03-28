const path = require('path');


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
                CollectionId: collectionData.id,
            },
        })
    );


    /**
     * GENERATING INTERVIEW PAGES
     */
    /**
    const interviews = await graphql(`
    {
      allNodeInterview {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
    `)

    interviews.data.allNodeInterview.nodes.map(interviewData =>
      createPage({
          path: "/collections" + interviewData.path.alias,
          component: path.resolve(`src/templates/interview.js`),
          context: {
              InterviewId: interviewData.id,
          },
      })
  );
   */
}