import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import InterviewCard from '../components/interviewcard';
import "../styles/collection.css";

function Collection({ data }) {
    const collection = data.collection;
    const interviews = data.interview.relationships.node__article;

    return (
        <Layout>
            <title>{collection.title}</title>
<<<<<<< HEAD
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
                        url={"/projects" + collection.path.alias + i.path.alias}
                    />
                ))}
=======
            <div className="collection-page-container">
                <div className="collection-header">
                    <h1>{collection.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: collection.body.processed }} />
                </div>

                <div className="interviews-list">
                    {interviews.map((interview) => (
                        <InterviewCard
                            key={interview.id}
                            img={"https://empathybytes.library.gatech.edu" + interview.relationships.field_image.uri.url}
                            title={interview.title}
                            author={interview.field_author}
                            date={interview.field_hg_dateline}
                            body={interview.field_blurb}
                            url={"/projects" + collection.path.alias + interview.path.alias}
                        />
                    ))}
                </div>
>>>>>>> 40c6fdab838584c415b86df66c9d0271155ac1ca

            </div>
        </Layout>
    );
}

export const query = graphql`
    query ($CollectionTitle: String!) {
        collection: nodeCollection(title: { eq: $CollectionTitle }) {
            id
            title
            body {
                processed
            }
            path {
                alias
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
        interview: taxonomyTermTags(name: {eq: $CollectionTitle }) {
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