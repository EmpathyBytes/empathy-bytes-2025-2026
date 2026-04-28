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
  {
    key: "tech-green",
    title: "Golden Hour on Tech Green",
    location: "Tech Green",
    description: "Students sit, talk, and walk across the grass as the sun begins to set. The space stays active but starts to quiet down.",
    timeOfDay: ["evening"],
    mood: ["stillness"],
    activity: ["gathering"],
    location_type: ["outdoor"],
  },
  {
    key: "tech-walkway",
    title: "Between Classes",
    location: "Tech Green Walkway",
    description: "Students move quickly between buildings in multiple directions.",
    timeOfDay: ["midday"],
    mood: ["motion"],
    activity: ["walking", "routine"],
    location_type: ["outdoor"],
  },
  {
    key: "campanile",
    title: "The Campanile",
    location: "Campanile",
    description: "Water flows steadily from the fountain throughout the day.",
    timeOfDay: ["midday"],
    mood: [],
    activity: ["gathering"],
    location_type: ["outdoor"],
  },
  {
    key: "culc-library",
    title: "Fluorescent Focus",
    location: "CULC",
    description: "Students type on laptops and turn pages in a quiet study space.",
    timeOfDay: ["evening"],
    mood: ["focus"],
    activity: ["studying"],
    location_type: ["indoor", "study spaces"],
  },
  {
    key: "peters-parking",
    title: "Pickleball on the Deck",
    location: "Peters Parking Deck",
    description: "Pickleball paddles hit the ball in quick, steady rhythm.",
    timeOfDay: ["evening"],
    mood: ["motion"],
    activity: ["gathering"],
    location_type: ["outdoor"],
  },
  {
    key: "tech-tower",
    title: "Tech Tower Chimes",
    location: "Tech Tower",
    description: "The campus steam whistle sounds from Tech Tower.",
    timeOfDay: ["midday"],
    mood: ["routine"],
    activity: ["routine"],
    location_type: ["outdoor"],
  },
  {
    key: "mccamish-pavilion",
    title: "McCamish Crowd",
    location: "McCamish Pavilion",
    description: "The crowd reacts to each possession during a basketball game.",
    timeOfDay: [],
    mood: ["celebration"],
    activity: ["gathering"],
    location_type: ["indoor"],
  },
  {
    key: "bobby-dodd",
    title: "Gameday on the Flats",
    location: "Bobby Dodd Stadium",
    description: "The crowd rushes onto the field as the game ends.",
    timeOfDay: [],
    mood: ["celebration"],
    activity: ["gathering"],
    location_type: ["outdoor"],
  },
  {
    key: "gt-stinger",
    title: "Stingers in Passing",
    location: "Campus Roadways",
    description: "Two Stinger buses pass each other on the road.",
    timeOfDay: [],
    mood: ["motion"],
    activity: ["routine"],
    location_type: ["outdoor"],
  },
  {
    key: "student-center",
    title: "Student Center Activity",
    location: "Tech Rec",
    description: "Bowling balls roll down lanes while pins crash in the distance.",
    timeOfDay: [],
    mood: ["motion"],
    activity: ["gathering"],
    location_type: ["indoor", "social spaces"],
  },
];

// filter options matching the tab breakdown sheet
const FILTERS = {
  timeOfDay: ["Morning", "Midday", "Evening", "Late Night"],
  mood: ["Stillness", "Motion", "Focus", "Celebration", "Routine"],
  activity: ["Studying", "Gathering", "Sports", "Practicing", "Creating"],
  location_type: ["Outdoor", "Indoor", "Academic Building", "Study Spaces", "Social Spaces"],
};
    

function Collections({ cardMap }) {
    // Shows all options
    const [timeFilter, setTimeFilter]         = useState("All");
    const [moodFilter, setMoodFilter]         = useState("All");
    const [activityFilter, setActivityFilter] = useState("All");
    const [locationFilter, setLocationFilter] = useState("All");

    // filtered gets recalculated every time activeFilter changes
    const filtered = collectionItems.filter((item) => {
        if (timeFilter !== "All"     && !item.timeOfDay.includes(timeFilter.toLowerCase()))     return false;
        if (moodFilter !== "All"     && !item.mood.includes(moodFilter.toLowerCase()))          return false;
        if (activityFilter !== "All" && !item.activity.includes(activityFilter.toLowerCase()))  return false;
        if (locationFilter !== "All" && !item.location_type.includes(locationFilter.toLowerCase())) return false;
        return true;
    });

    // reusable filter row component
    const FilterRow = ({ label, options, active, setActive }) => (
    <div style={{ flex: 1 }}>  {/* ← flex: 1 makes each take equal width */}
        <select
        value={active}
        onChange={(e) => setActive(e.target.value)}
        style={{
            padding: "8px 16px",
            border: "2px solid #003057",  
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: 600,
            width: "100%",              
        }} >

        <option value="All">{label}</option>
        {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
        ))}
        </select>
    </div>
    );

    return (
    <section style={{ padding: "3rem 1.5rem", background: "#fff" }}>
      <h2 style={{ color: "#003057", textAlign: "center", marginBottom: "1.5rem" }}>Collections</h2>

      {/* filter dropdowns */}
      <div style={{ 
        display: "flex", 
        gap: "1rem", 
        justifyContent: "center",  // ← centers them
        flexWrap: "wrap", 
        marginBottom: "2rem" }}>
        <FilterRow label="TIME OF DAY"  options={FILTERS.timeOfDay}      active={timeFilter}     setActive={setTimeFilter} />
        <FilterRow label="MOOD"         options={FILTERS.mood}           active={moodFilter}     setActive={setMoodFilter} />
        <FilterRow label="ACTIVITY"     options={FILTERS.activity}       active={activityFilter} setActive={setActivityFilter} />
        <FilterRow label="LOCATION"     options={FILTERS.location_type}  active={locationFilter} setActive={setLocationFilter} />
      </div>

      {/* card grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "1.5rem",
      }}>
        {filtered.map((item) => (
          <div key={item.key} style={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "2px 4px 12px rgba(0,0,0,0.12)",
            position: "relative",
            cursor: "pointer",
          }}>
            {/* image */}
            {cardMap[item.key] ? (
              <GatsbyImage image={cardMap[item.key]} alt={item.title} style={{ height: "220px" }} />
            ) : (
              <div style={{ height: "220px", background: "#ccc" }} />
            )}

            {/* title overlay at bottom */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              padding: "2rem 0.75rem 0.75rem",
            }}>
              <p style={{ color: "#fff", fontWeight: 900, fontSize: "0.85rem", margin: 0 }}>
                {item.title}
              </p>
              <p style={{ color: "#ccc", fontSize: "0.7rem", margin: "2px 0 0" }}>
                {item.location}
              </p>
            </div>

            {/* play button */}
            <div style={{
              position: "absolute", bottom: "8px", right: "8px",
              background: "#fff", borderRadius: "50%",
              width: "32px", height: "32px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              ▶
            </div>
          </div>
        ))}
      </div>

      {/* empty state */}
      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>
          No postcards match these filters.
        </p>
      )}
    </section>
  );
}

export default function PostcardsPage({ data }) {
    // build imageMap from the query results
    const imageMap = {};
    data.postcardImages.nodes.forEach((node) => {
        imageMap[node.name] = getImage(node.childImageSharp?.gatsbyImageData);
    });

    // new cardMap for collections grid
    const cardMap = {};
    data.cardImages.nodes.forEach((node) => {
        cardMap[node.name] = getImage(node.childImageSharp?.gatsbyImageData);
    });

    return (
        <Layout>
            <Header imageMap={imageMap} />
            <ExploreCarousel imageMap={imageMap} />
            <Collections cardMap={cardMap} />  
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

    cardImages: allFile(
      filter: {
        sourceInstanceName: { eq: "card-images" }
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