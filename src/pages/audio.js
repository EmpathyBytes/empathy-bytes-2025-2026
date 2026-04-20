import React from "react";
import Layout from "../components/layout";
import Button from "../components/button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby" 
import { useState } from "react";

import Grid from '@mui/material/Grid';


const postcards = [
  { image: "tech-green", label: "Tech Green", rotate: -8, top: "10%", left: "5%" },
  { image: "tech-tower", label: "Tech Tower", rotate: 5, top: "5%", left: "30%" },
  { image: "bobby-dodd", label: "Bobby Dodd Stadium", rotate: -3, top: "8%", right: "5%" },
  { image: "campanile", label: "Campanile", rotate: 7, bottom: "10%", left: "10%" },
];


function Header() {
    return (
        <div style={{ position: "relative", height: "420px", overflow: "hidden", background: "#fffdf8" }}></div>

    );
}

// add webpage cards for carousel
const exploreItems = [
  { key: "bobby-dodd", label: "Stadium" },
  { key: "tech-green", label: "Tech Green" },
  { key: "tech-tower", label: "Tech Tower" },
  { key: "campanile", label: "Campanile" },
  { key: "culc", label: "Culc" },
  { key: "student-center", label: "Student Center" },
  { key: "tech-walkway", label: "Tech Walkway" },
  { key: "stinger", label: "Stinger" },
  { key: "mccamish", label: "McCamish" },
  { key: "crc", label: "CRC" },
  { key: "peters-parking", label: "Peters" },
];

function ExploreCarousel({ imageMap }) {
    
    return (
        <section style={{ 
            padding: "3rem 1.5rem", 
            textAlign: "center",
            background: "#fff",       
        }}>
        <h2 style={{ color: "#003057", marginBottom: "2rem" }}>Explore</h2>

        {/* show only the current card */}
        <div style={{ 
            display: "flex", 
            overflowX: "auto", 
            gap: "1rem", 
            paddingBottom: "1rem" 
        }}>
            {exploreItems.map((item) => (
            <div
                key={item.key}
                style={{
                minWidth: "300px",   
                flexShrink: 0,
                background: "#fff",
                border: "1px solid #ddd",
                boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.15)",
                overflow: "hidden",
                }}
            >
                {imageMap[item.key] ? (
                <GatsbyImage
                    image={imageMap[item.key]}
                    alt={item.label}
                    style={{ height: "459px", width: "594px" }}  
                />
                ) : (
                <div style={{ height: "200px", background: "#ccc" }} />
                )}
            </div>
            ))}
            
        </div>
        </section>
    );
}

const collectionItems = [
    { key: "tech-green", timeOfDay: "evening", mood: "stillness", activity: "gathering", location: "outdoors"},
    { key: "tech-walkway", timeOfDay: "midday", mood: "motion", activity: ["walking", "routine"], location: "outdoors"},
    { key: "campanile", timeOfDay: "midday", mood: "", activity: "gathering", location: "outdoors"},
    { key: "culc-library", timeOfDay: "evening", mood: "focus", activity: "studying", location: "indoors"},
    { key: "peters-parking", timeOfDay: "evening", mood: "motion", activity: ["competing", "gathering"], location: "outdoors"},
    { key: "tech-tower", timeOfDay: "midday", mood: "", activity: ["routine", "campus tradition", "reflection"], location: "outdoors"},
    { key: "mccamish-pavilion", timeOfDay: "game day", mood: "intensity", activity: ["gathering", "celebration"] , location: "outdoors"},
    { key: "bobby-dodd", timeOfDay: "game day", mood: "", activity: ["celebration", "intensity"], location: "outdoors"},
    { key: "gt-stinger", timeOfDay: "", mood: "motion", activity: ["commuting", "routine"], location: "outdoors"},
    { key: "student-center", timeOfDay: "", mood: "", activity: "", location: "indoors"},
]
    

function Collections() {
    // Shows all options
    const [activeFilter, setActiveFilter] = useState("All");  

    // filtered gets recalculated every time activeFilter changes
    const filtered = collectionItems.filter((item) => {
        if (activeFilter === "All") return true;
        return item.activity.includes(activeFilter);
    });

    return (
        <section style={{ 
            padding: "3rem 1.5rem", 
            textAlign: "center",
            background: "#fff",       
        }}>
        <h2 style={{ color: "#003057", marginBottom: "2rem" }}>Collections</h2>

        {/* filter buttons */}
        <button onClick={() => setActiveFilter("All")}>All</button>
        <button onClick={() => setActiveFilter("gathering")}>Gathering</button>
        <button onClick={() => setActiveFilter("studying")}>Studying</button>

        {/* map over filtered instead of collectionItems */}
        {filtered.map((item) => (
            <div key={item.key}>
            {item.key}
            </div>
        ))}


        </section>
    );
}

export default function PostcardsPage({ data }) {
    // build imageMap from the query results
    const imageMap = {};
    data.postcardImages.nodes.forEach((node) => {
        imageMap[node.name] = getImage(node.childImageSharp?.gatsbyImageData);
    });

    return (
        <Layout>
            <Header imageMap={imageMap} />
            <ExploreCarousel imageMap={imageMap} />
            <Collections imageMap={imageMap} />
        </Layout>
    )
}

// this runs at build time and fetches your images
export const query = graphql`
  query PostcardsQuery {
    postcardImages: allFile(
      filter: {
        sourceInstanceName: { eq: "postcard-images" }
        extension: { regex: "/(jpg|jpeg|png)/" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  }
`;