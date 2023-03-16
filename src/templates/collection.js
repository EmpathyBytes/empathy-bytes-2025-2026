import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout";

// Functional Collection Component
// This Function will find all the collection components on the drupal site, and create a page
// on the gatsby site for each component

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
};

const col = {
    padding: 10,
};

const img_style = {
    height: "240",
    width: "240",
    objectFit: 'cover',
};

function Collection({data}) {
    const post = data.collection;
    const interview = data.interview.nodes;

    return (
        <Layout>
        <div style={container}>
            <div class="row">
                <div class="col" style={col}>
                        <img style ={{width:"240px", height:"240px", objectFit: "cover"}} src={"https://empathybytes.library.gatech.edu" + post.relationships.field_image.uri.url}/>
                </div>
                <div class="col" style={col}>
                    <h1>{post.title}</h1>
                </div>
                <div class="col" style={col}><div dangerouslySetInnerHTML={{ __html: post.body.processed }}/></div>
                </div>
                {interview.map((i) => (
                    <div class="row">
                        <div class="col" style={col}>
                            <img style ={{width:"240px", height:"240px", objectFit:"cover"}} src={"https://empathybytes.library.gatech.edu" + i.relationships.field_image.uri.url}/>
                        </div>
                        <div class="col" style={col}><h1>{i.title}</h1></div>
                        <div class="col" style={col}>
                            <div dangerouslySetInnerHTML={{ __html: i.body.processed }}/>
                            <p>{i.field_hg_dateline}</p>
                        </div>
                    </div>
                ))}

        </div>
        </Layout>
    );
}



// These are the graphql queries to pull the drupal site data
Collection.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query Collections ($CollectionId: String!) {
        collection: nodeCollection(id: { eq: $CollectionId }) {
            id
            title
            body {
                processed
            }
            relationships {
                field_image {
                    uri {
                        url
                        value
                    }
                }
            }
        }
        interview: allNodeArticle(filter: {field_collection: {eq: $CollectionId}}) {
            nodes {
                id
                title
                field_author
                field_hg_dateline
                body {
                    processed
                }
                relationships {
                    field_image {
                        uri {
                            url
                        }
                    }
                }
            }
        }
    }
`;

/**
 *     nodeArticle(field_collection: { eq: "Distance Math" }) {
        id
        title
        body {
            processed
        }
        relationships {
            field_image {
                uri {
                    url
                    value
                }
            }
        }
    }
 */

/**
 *                 {articles.map((article) => ( // Mapping interview data to grid layout
                    <div class="row">
                    <div class="col" style={col}> 
                        <img stle = {img_style} src={"https://empathybytes.library.gatech.edu" + article.relationships.field_image.uri.url}/>
                    </div>
                        <div class="col" style={col}>
                            <h1>{article.title}</h1>
                        </div>
                    <div class="col" style={col}><div dangerouslySetInnerHTML={{ __html: article.body.processed }}/></div>
                    </div>
                ))}
 */

export default Collection;