import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import InterviewCard from '../components/interviewcard';
import "../styles/fonts.css"

/**
 * Functional Collection Component
 * This function will find all the collection components on the drupal site and create a page
 * on the gatsby site for each component. This is the page accessed when
 * the Learn More button is clicked on a card.
 */

// TODO: Move this styling to a separate file 

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
    ["font-family"]: 'Roboto',
};

const collection_name = {
    ["text-align"]: 'center',
    ['padding-top']: 10,
    ['font-family']: 'Roboto Slab, serif',
    color: '#b3a369',
}

function Collection({ data }) {
    const collection = data.collection;
    const interview = data.interview.relationships.node__article;

    return (
        <Layout>
            <div style={container}>
                <h1 style={collection_name}>{collection.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: collection.body.processed }} />
                <p></p>
                {interview.map((i) => (
                    <InterviewCard
                        img={"https://empathybytes.library.gatech.edu" + i.relationships.field_image.uri.url}
                        title={i.title}
                        author={i.field_author}
                        date={i.field_hg_dateline}
                        body={i.field_blurb}
                        url={i.path.alias}
                    />
                ))}

            </div>
        </Layout>
    );
}



// These are the graphql queries to pull the drupal site data
Collection.propTypes = {
    data: PropTypes.object.isRequired,
};

/**
 * This query first pulls all collection data by title. Then, the interviews 
 * with the same collection id are pulled.
 */
export const query = graphql`
    query ($CollectionTitle: String!) {
        collection: nodeCollection(title: { eq: $CollectionTitle }) {
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
        interview: taxonomyTermTags(name: {glob: $CollectionTitle }) {
              relationships {
                node__article {
                        path {
                            alias
                        }
                        id
                        title
                        field_author
                        field_hg_dateline
                        field_blurb
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
    }
`;
export default Collection;