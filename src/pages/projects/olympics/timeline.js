import React from "react";
import { graphql, Link } from "gatsby";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Layout from "../../../components/layout";

const pageStyles = {
  wrapper: {
    padding: "0 0 5rem",
  },
  backLinkWrap: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "1rem 1rem 0",
  },
  backLink: {
    color: "#00548f",
    fontWeight: 700,
    textDecoration: "underline",
  },
  pageTitle: {
    color: "#000",
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    lineHeight: 1.05,
    margin: "0 0 2rem",
    padding: "0 0 0 0.25rem",
  },
  intro: {
    background: "#00548f",
    padding: "2rem 1.5rem 3rem",
    marginBottom: "3rem",
  },
  introInner: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    lineHeight: 1.15,
    margin: "0 0 1.5rem",
  },
  summaryCard: {
    background: "#f3f3f1",
    border: "2px solid #cfd3d8",
    borderRadius: "12px",
    boxShadow: "0 2px 0 rgba(0, 0, 0, 0.15)",
    margin: "0 auto",
    maxWidth: "800px",
    padding: "1.25rem 1.5rem",
  },
  summary: {
    color: "#4b5563",
    fontSize: "1.25rem",
    lineHeight: 1.5,
    margin: 0,
    textAlign: "center",
  },
  subtitle: {
    margin: 0,
    color: "#555",
    fontWeight: 600,
  },
  description: {
    color: "#1f1f1f",
    fontSize: "1rem",
    lineHeight: 1.7,
    margin: 0,
    textAlign: "left",
  },
  cardTitle: {
    margin: "0 0 0.9rem",
  },
  textStack: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  imageContainer: {
    marginTop: "1rem",
    borderRadius: "12px",
    overflow: "hidden",
    width: "100%",
    background: "#f6f7f9",
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
    maxWidth: "100%",
  },
  icon: {
    alignItems: "center",
    display: "flex",
    fontSize: "1.2rem",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  eventLink: {
    color: "#00548f",
    display: "inline-block",
    fontWeight: 600,
    marginTop: "0.85rem",
    textDecoration: "underline",
  },
};

const getEventImage = (relationships) => {
  const rawImages = relationships?.field_field_event_images;

  if (!rawImages) {
    return [];
  }

  const images = Array.isArray(rawImages) ? rawImages : [rawImages];

  return images.map((img) => ({
    src: img?.relationships?.field_media_hg_image?.url || "",
    alt: img?.field_media_hg_image?.alt || img?.name || "",
  }));
};

function OlympicsTimelinePage({ data }) {
  const timelineEvents = data?.timelineEvents?.nodes || [];

  return (
    <Layout>
      <style>{`
        .timeline-event-body,
        .timeline-event-body * {
          color: #000 !important;
        }
      `}</style>

      <section style={pageStyles.wrapper}>
        <div style={pageStyles.backLinkWrap}>
          <Link to="/projects/olympics" style={pageStyles.backLink}>
            Back to Olympics Hub
          </Link>
        </div>

        <h1 style={pageStyles.pageTitle}>Olympics Timeline</h1>
        <div style={pageStyles.intro}>
          <div style={pageStyles.introInner}>
            <h2 style={pageStyles.title}>1996 Olympics at Georgia Tech</h2>
            <div style={pageStyles.summaryCard}>
              <p style={pageStyles.summary}>
                Explore the historic journey of how Georgia Tech transformed into
                the Olympic Village for the 1996 Centennial Games.
              </p>
            </div>
          </div>
        </div>

        <VerticalTimeline>
          {timelineEvents.map((eventNode, index) => {
            const eventTitle = eventNode?.field_field_event_title?.value || "Untitled Event";
            const eventSubtitle = eventNode?.field_field_event_subtitle?.value || "";
            const eventDate = eventNode?.field_field_display_date?.value || eventNode?.field_field_event_date || "";
            const eventDescriptionHtml = eventNode?.field_field_event_body?.processed || "";
            const eventImages = getEventImage(eventNode?.relationships);
            const eventUrl = eventNode?.field_field_event_url?.value || "";
            const eventIcon = eventNode?.field_icon;

            return (
              <VerticalTimelineElement
                key={eventNode?.id || `${eventTitle}-${index}`}
                date={eventDate}
                contentStyle={{ background: "#fff", color: "#000" }}
                contentArrowStyle={{ borderRight: "7px solid #fff" }}
                iconStyle={{ background: "#003057", color: "#fff" }}
                icon={<span style={pageStyles.icon}>{eventIcon}</span>}
              >
                <div style={pageStyles.textStack}>
                  <h3 style={pageStyles.cardTitle}>{eventTitle}</h3>
                  {eventSubtitle && <p style={pageStyles.subtitle}>{eventSubtitle}</p>}

                  {eventDescriptionHtml ? (
                    <div
                      className="timeline-event-body"
                      style={pageStyles.description}
                      dangerouslySetInnerHTML={{ __html: eventDescriptionHtml }}
                    />
                  ) : (
                    <p style={pageStyles.description}>No event description available.</p>
                  )}
                </div>

                {eventImages.map((image, idx) =>
                  image.src ? (
                    <div key={idx} style={pageStyles.imageContainer}>
                      <img
                        src={image.src}
                        alt={image.alt || eventTitle}
                        style={pageStyles.image}
                      />
                    </div>
                  ) : null
                )}

                {eventUrl && (
                  <a
                    href={eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={pageStyles.eventLink}
                  >
                    Learn more
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </section>
    </Layout>
  );
}

export default OlympicsTimelinePage;

export const Head = () => (
  <>
    <title>Olympics Timeline | Empathy Bytes</title>
  </>
);

export const query = graphql`
  query OlympicsTimelineNestedQuery {
    timelineEvents: allNodeOlympicsTimelineEvent(
      sort: { field_field_event_order: ASC }
    ) {
      nodes {
        id
        title
        field_field_display_date {
          value
        }
        field_field_event_body {
          processed
        }
        field_field_event_date
        field_field_event_order
        field_field_event_subtitle {
          value
        }
        field_field_event_title {
          value
        }
        field_field_event_url {
          value
        }
        field_icon
        relationships {
          field_field_event_images {
            name
            field_media_hg_image {
              alt
            }
            relationships {
              field_media_hg_image {
                url
              }
            }
          }
        }
      }
    }
  }
`;
