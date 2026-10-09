import React from "react";
import "../styles/notes.css";
import "../styles/all.css";
import Layout from "../components/layout";


import note1 from "../images/notes/notes1.png";
import note2 from "../images/notes/notes2.png";
import note3 from "../images/notes/notes3.png";
import note4 from "../images/notes/notes4.png";
import note5 from "../images/notes/notes5.png";
import note6 from "../images/notes/notes6.png";
import note7 from "../images/notes/notes7.png";
import note8 from "../images/notes/notes8.png";
import note9 from "../images/notes/notes9.png";
import note10 from "../images/notes/notes10.png";
import note11 from "../images/notes/notes11.png";
import note12 from "../images/notes/notes12.png";
import note13 from "../images/notes/notes13.png";
import note14 from "../images/notes/notes14.png";
import note15 from "../images/notes/notes15.png";
import note16 from "../images/notes/notes16.png";
import note17 from "../images/notes/notes17.png";
import note18 from "../images/notes/notes18.png";
import note19 from "../images/notes/notes19.png";
import note20 from "../images/notes/notes20.png";
import note21 from "../images/notes/notes21.png";
import note22 from "../images/notes/notes22.png";
import note23 from "../images/notes/notes23.png";
import note24 from "../images/notes/notes24.png";
import note25 from "../images/notes/notes25.png";
import note26 from "../images/notes/notes26.png";
import note27 from "../images/notes/notes27.png";
import note28 from "../images/notes/notes28.png";
import note29 from "../images/notes/notes29.png";
import note30 from "../images/notes/notes30.png";
import note31 from "../images/notes/notes31.png";
import note32 from "../images/notes/notes32.png";
import note33 from "../images/notes/notes33.png";
import note34 from "../images/notes/notes34.png";
import note35 from "../images/notes/notes35.png";
import note36 from "../images/notes/notes36.png";
import note37 from "../images/notes/notes37.png";
import note38 from "../images/notes/notes38.png";
import note39 from "../images/notes/notes39.png";
import note40 from "../images/notes/notes40.png";

const notes = [
    note1, note2, note3, note4, note5,
    note6, note7, note8, note9, note10,
    note11, note12, note13, note14, note15,
    note16, note17, note18, note19, note20,
    note21, note22, note23, note24, note25,
    note26, note27, note28, note29, note30,
    note31, note32, note33, note34, note35,
    note36, note37, note38, note39, note40
  ];

export default function Notes() {
  return (
    <Layout>
    <div className="notes-page">
      {/* HERO */}
      <section className="hero">
        <div className="overlay">
          <h2 className="subtitle">STORIES FROM</h2>
          <h1 className="title">Stingers</h1>
        </div>
      </section>

      {/* ARCHIVE TITLE */}
      <h2 className="archive-title">Spring 2026 Archives</h2>

      {/* NOTES GRID */}
      <section className="notes-grid">
        {notes.map((src, index) => (
          <div key={index} className="note">
            <img src={src} alt={`note-${index}`} />
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>Empathy Bytes</h3>
        <div className="footer-links">
          <div>
            <p>General</p>
            <span>Home</span>
            <span>About Us</span>
            <span>Contact</span>
          </div>
          <div>
            <p>Teams</p>
            <span>App</span>
            <span>VR</span>
            <span>Media</span>
          </div>
          <div>
            <p>Communities</p>
            <span>Distance Math</span>
            <span>Covid Freshmen</span>
            <span>Makerspace</span>
          </div>
        </div>
      </footer>
    </div>
    </Layout>
  );
}