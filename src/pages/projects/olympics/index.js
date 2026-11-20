import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import InterviewCard from "../../../components/interviewcard";
import FlexibleCard from "../../../components/FlexibleCard";
import "../../../styles/collection.css";

function OlympicsHubPage({ data }) {
  const collection = data?.olympicsCollection;
  const interviews =
    data?.interview?.relationships?.node__article?.filter(Boolean) ?? [];

  return (
    <Layout>
      <div className="collection-page-container">
        <div className="collection-header">
          <h1>{collection?.title || "Olympics at Georgia Tech"}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html:
                collection?.body?.processed ||
                "<p style=\"text-align: center;\">Explore Georgia Tech's Olympic history through the timeline and gallery.</p>",
            }}
          />
        </div>

        <div className="interviews-list">
          <FlexibleCard
            variant="interview"
            className="olympics-route-card"
            title="Olympics Timeline"
            body="Explore the historic journey of how Georgia Tech transformed into the Olympic Village for the 1996 Centennial Games."
            link="/projects/olympics/timeline"
          />

          <FlexibleCard
            variant="interview"
            className="olympics-route-card"
            title="Olympics Gallery"
            body="Explore our collection of Olympic Village photos."
            link="/projects/olympics/gallery"
          />

          {interviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              img={
                interview?.relationships?.field_image?.uri?.url
                  ? "https://empathybytes.library.gatech.edu" +
                    interview.relationships.field_image.uri.url
                  : ""
              }
              title={interview?.title || ""}
              author={interview?.field_author || ""}
              date={interview?.field_hg_dateline || ""}
              body={interview?.field_blurb || ""}
              url={
                "/projects" +
                (collection?.path?.alias || "/olympics") +
                (interview?.path?.alias || "")
              }
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default OlympicsHubPage;

export const Head = () => (
  <>
    <title>Olympics at Georgia Tech | Empathy Bytes</title>
  </>
);

export const query = graphql`
  query OlympicsHubQuery {
    olympicsCollection: nodeCollection(title: { eq: "Olympics at Georgia Tech" }) {
      id
      title
      body {
        processed
      }
      path {
        alias
      }
    }
    interview: taxonomyTermTags(name: { eq: "Olympics at Georgia Tech" }) {
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
