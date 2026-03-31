import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Layout from "../components/layout";

// Timeline content is kept in one array so each event card can be rendered consistently.
const timelineEvents = [
  {
    eventKey: "virtual-reality-gamble",
    icon: "🎮",
    date: "1989",
    title: 'The "Virtual Reality" Gamble',
    subtitle: "Atlanta's Olympic bid gets a tech-forward edge",
    description:
      "Instead of a traditional cardboard model, Georgia Tech President John P. Crecine proposed a cutting-edge virtual reality fly-through to give Atlanta a technological edge. Undergraduates and faculty linked the campus's supercomputers to process the massive amounts of data required for the computer animation.",
  },
  {
    eventKey: "high-tech-southern-hospitality",
    icon: "🌎",
    date: "September 1990",
    title: "High-Tech Southern Hospitality",
    subtitle: "The presentation becomes Atlanta's secret weapon",
    description:
      `The completed interactive presentation was showcased at the 96th IOC Congress in Tokyo. IOC members used a trackball to navigate a 3D model of the city and village, an innovation deemed Atlanta's "secret weapon". After winning the bid, Andrew Young famously attributed the victory to this "high-tech Southern hospitality".`,
  },
  {
    eventKey: "108-million-makeover",
    icon: "🏗️",
    date: "1991-1996",
    title: "The $108 Million Makeover",
    subtitle: "Campus housing transforms for 15,000 athletes",
    description:
      "To prepare for 15,000 athletes, Georgia Tech invested $108.3 million to build seven apartment-style residence halls. This massive construction project permanently changed Georgia Tech, almost doubling its housing inventory so that 70 percent of the undergraduate student body could live on campus.",
  },
  {
    eventKey: "defusing-a-nuclear-threat",
    icon: "☢️",
    date: "November 1995",
    title: "Defusing a Nuclear Threat",
    subtitle: "Olympic security reaches the Neely reactor",
    description:
      "Because the Georgia Tech campus housed the Neely Nuclear Research Center, a fully functional research reactor, federal authorities raised severe security concerns regarding potential terror attacks on the Olympic Village. On November 17, 1995, the reactor was permanently shut down, and its highly enriched uranium fuel was shipped off-site by February 1996.",
  },
  {
    eventKey: "the-bubble-closes",
    icon: "🔒",
    date: "July 1, 1996",
    title: "The Bubble Closes",
    subtitle: "Georgia Tech becomes the Olympic Village",
    description:
      `On July 1, 1996, the campus was officially closed to the public to finalize preparations. A high, electrified fence was constructed around the perimeter, turning the academic community into a heavily fortified Olympic Village that functioned as the "sixth-largest city in Georgia" for five weeks.`,
  },
  {
    eventKey: "unlimited-big-macs-and-early-email",
    icon: "🍔",
    date: "July 19 - August 4, 1996",
    title: "Unlimited Big Macs & Early Email",
    subtitle: "Global athletes meet early internet culture",
    description:
      `Athletes dined at a massive, full-service McDonald's tent on campus, where professional volleyball player Kent Steffes noted that athletes from around the world were walking away with stacks of six Big Macs per plate. Next door, IBM built the "Surf Shack," a colorful internet cafe where athletes were introduced to early digital technology and provided with individual email accounts for fan mail.`,
  },
  {
    eventKey: "the-center-of-the-world",
    icon: "🏅",
    date: "Summer 1996",
    title: "The Center of the World",
    subtitle: "Georgia Tech takes the international spotlight",
    description:
      "The Kessler Campanile, an 80-foot stainless steel obelisk built specifically for the Olympics, served as the daily broadcasting backdrop for NBC's The Today Show. Additionally, 44 athletes and coaches affiliated with Georgia Tech proudly participated in the Centennial Games.",
  },
];

const pageStyles = {
  wrapper: {
    padding: "0 0 5rem",
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
    margin: "0.4rem 0 0.9rem",
    color: "#555",
    fontWeight: 600,
  },
  description: {
    color: "#1f1f1f",
    fontSize: "1rem",
    lineHeight: 1.7,
    margin: "0",
    textAlign: "left",
  },
  image: {
    marginTop: "1rem",
    borderRadius: "12px",
    overflow: "hidden",
  },
  icon: {
    alignItems: "center",
    display: "flex",
    fontSize: "1.2rem",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
};

const normalizeImageKey = (value) => value?.trim().toLowerCase();

function OlympicTimelinePage({ data }) {
  const imageMap = {};

  // Normalize both filenames and event keys so small casing differences do not break image lookups.
  data.timelineImages.nodes.forEach((node) => {
    imageMap[normalizeImageKey(node.name)] = getImage(
      node.childImageSharp?.gatsbyImageData
    );
  });

  return (
    <Layout>
      <section style={pageStyles.wrapper}>
        <h1 style={pageStyles.pageTitle}>Olympic Timeline Page</h1>
        <div style={pageStyles.intro}>
          <div style={pageStyles.introInner}>
            <h2 style={pageStyles.title}>🏅 1996 Olympics at Georgia Tech</h2>
            <div style={pageStyles.summaryCard}>
              <p style={pageStyles.summary}>
                Explore the historic journey of how Georgia Tech transformed into
                the Olympic Village for the 1996 Centennial Games. From
                cutting-edge virtual reality to defusing a nuclear reactor,
                discover the remarkable story behind Atlanta&apos;s Olympic legacy.
              </p>
            </div>
          </div>
        </div>

        <VerticalTimeline>
          {timelineEvents.map((event) => (
            <VerticalTimelineElement
              key={event.eventKey}
              date={event.date}
              contentStyle={{ background: "#fff", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              iconStyle={{ background: "#003057", color: "#fff" }}
              icon={<span style={pageStyles.icon}>{event.icon}</span>}
            >
              <h3>{event.title}</h3>
              <p style={pageStyles.subtitle}>{event.subtitle}</p>
              <p style={pageStyles.description}>{event.description}</p>

              {imageMap[normalizeImageKey(event.eventKey)] && (
                <GatsbyImage
                  image={imageMap[normalizeImageKey(event.eventKey)]}
                  alt={event.title}
                  style={pageStyles.image}
                />
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </Layout>
  );
}

export default OlympicTimelinePage;

export const Head = () => (
  <>
    <title>Olympic Timeline | Empathy Bytes</title>
  </>
);

export const query = graphql`
  query OlympicTimelineQuery {
    timelineImages: allFile(
      filter: {
        sourceInstanceName: { eq: "olympic-timeline-images" }
        extension: { regex: "/(jpg|jpeg|png)/" }
      }
      sort: { name: ASC }
    ) {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(
            width: 1200
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`;
