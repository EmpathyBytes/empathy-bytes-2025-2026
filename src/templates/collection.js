import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import InterviewCard from '../components/interviewcard';

// Functional Collection Component
// This Function will find all the collection components on the drupal site, and create a page
// on the gatsby site for each component

const container = {
    padding: "6% 5% 6% 5%",
    paddingTop: 120,
};

const collection_name = {
    ["text-align"]: 'center',
    ['padding-top']: 10,
    color: '#b3a369',
}

function Collection({data}) {
    const collection = data.collection;
    const interview = data.interview.nodes;

    return (
        <Layout>
        <div style={container}>
            <h1 style={collection_name}>{collection.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: collection.body.processed}}/>
            <p></p>
                {interview.map((i) => (
                    <InterviewCard
                    img = {"https://empathybytes.library.gatech.edu" + i.relationships.field_image.uri.url}
                    title = {i.title}
                    author = {i.field_author}
                    date = {i.field_hg_dateline}
                    body = {i.field_blurb}
                    url = {i.path.alias}
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
`;
export default Collection;