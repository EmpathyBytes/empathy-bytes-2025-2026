import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import "../styles/homepage.css"
import "../styles/all.css"
import "../styles/lifestyle.css"

import useMediaQuery from '@mui/material/useMediaQuery'

// ─── Data ────────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "Design & Creative",
  "Engineering & Tech",
  "Student Athletes",
  "Commuters",
  "Minimalists vs Over-packers",
]

const ACCORDIONS = [
  {
    q: "Most common items across campus",
    a: "From our submissions, the most universally carried items are laptops, water bottles, AirPods or headphones, and phone chargers. Almost every student surveyed carried some form of portable technology and a reusable bottle.",
  },
  {
    q: "What designers carry vs engineers",
    a: "Design students tend to carry sketchbooks, styluses, and Pantone swatches alongside their tech. Engineering students lean heavier on calculators, lab notebooks, and multi-tools. Both groups share a heavy laptop dependency — just different software running on them.",
  },
  {
    q: "Top 5 unexpected items",
    a: "1. A full-size kitchen knife (culinary student). 2. A hand-knitted stress ball. 3. Spare socks — multiple students. 4. A physical dictionary. 5. A mini succulent plant in a padded case.",
  },
]

// ─── Accordion Item ───────────────────────────────────────────────────────────
function AccordionItem({ item, isLast }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ec-accordion-item${isLast ? " last" : ""}`}>
      <button className="ec-accordion-header" onClick={() => setOpen(!open)}>
        {item.q}
        <svg
          className={`ec-plus-icon${open ? " open" : ""}`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19" stroke="#1c3557" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="5" y1="12" x2="19" y2="12" stroke="#1c3557" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && <div className="ec-accordion-body">{item.a}</div>}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
function EverydayCarryPage() {
  const isMobile = !useMediaQuery('(min-width:700px)')
  const [activeFilter, setActiveFilter] = useState("Design & Creative")
  const [dragOver, setDragOver] = useState(false)
  const [fileName, setFileName] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name)
  }
  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files[0]) setFileName(e.dataTransfer.files[0].name)
  }

  // 12 placeholder cells for the main gallery grid
  const gridCells = Array.from({ length: 12 })

  // 6 placeholder cells for the hero background (2 rows × 3 cols)
  const heroCells = Array.from({ length: 6 })

  return (
    <Layout>

      {/* ── Hero ── */}
      <div className="ec-hero">

        {/* Background: 2×3 grid of placeholder squares */}
        <div className="ec-hero-bg">
          <div className="ec-hero-placeholder-grid">
            {heroCells.map((_, i) => (
              <div key={i} className="ec-hero-placeholder-cell">
                {/* Swap for <img src={...} alt={...} /> when images are ready */}
              </div>
            ))}
          </div>
        </div>

        <div className="ec-hero-overlay" />

        <div className="ec-hero-content">
          <h1 className="ec-hero-title">Everyday Carry</h1>
          <button
            className="ec-submit-btn"
            onClick={() =>
              document.getElementById("submit-yours").scrollIntoView({ behavior: "smooth" })
            }
          >
            Submit Yours
          </button>
          <a href="#gallery" className="ec-explore-link" aria-label="Explore gallery">
            <span>Explore</span>
            <svg className="ec-explore-chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Category Filters ── */}
      <div className="ec-filter-bar" id="gallery">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`ec-filter-pill${activeFilter === cat ? " active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Image Grid ── */}
      <div className="ec-grid-wrapper">
        <div className="ec-grid-section">
          <div className="ec-grid">
            {gridCells.map((_, i) => (
              <div key={i} className="ec-grid-cell">
                {/* Swap for <img src={...} alt={...} /> when images are ready */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Accordion ── */}
      <div className="ec-accordion-wrapper">
        <div className="ec-accordion-section">
          {ACCORDIONS.map((item, i) => (
            <AccordionItem key={item.q} item={item} isLast={i === ACCORDIONS.length - 1} />
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <div className="ec-about-section">
        <h2 className="ec-about-title">About</h2>
        <p className="ec-about-body">
          Everyday Carry is a visual project documenting the items students at Georgia Tech carry in
          their backpacks each day. From laptops and notebooks to personal and unexpected essentials,
          these objects reflect how individuals prepare for their routines, responsibilities, and lives
          on campus.
        </p>
        <p className="ec-about-body">
          By bringing these items into view, the project highlights the diversity of work, interests,
          and lifestyles within our community. What may seem ordinary (a charger, a water bottle)
          becomes a small insight into how different students think, create, and navigate their day.
        </p>
        <div className="ec-made-by">
          <span>Made by</span>
          <a href="/" className="ec-made-by-link">
            <img
              src="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg"
              alt="Empathy Bytes logo"
              className="ec-made-by-logo"
            />
            Empathy Bytes
          </a>
        </div>
      </div>

      {/* ── Submit Form ── */}
      <div className="ec-submit-section" id="submit-yours">
        <h2 className="ec-submit-title">Submit Yours</h2>
        <p className="ec-submit-subtitle">
          Share what you carry. Submit your backpack to be part of the project: quick, simple, and
          optional to stay anonymous.
        </p>

        <div className="ec-form-grid">

          {/* File upload box */}
          <div
            className={`ec-upload-box${dragOver ? " drag-over" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input").click()}
          >
            <svg className="ec-upload-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span className="ec-upload-filename">{fileName || "Choose a file"}</span>
            <span className="ec-upload-hint">or drag and drop a file to upload</span>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          {/* Name / Major / Year */}
          <div className="ec-field-group">
            <div>
              <label className="ec-label" htmlFor="name">Name</label>
              <input id="name" className="ec-input" type="text" />
            </div>
            <div>
              <label className="ec-label" htmlFor="major">Major *</label>
              <input id="major" className="ec-input" type="text" />
            </div>
            <div>
              <label className="ec-label" htmlFor="year">Year *</label>
              <input id="year" className="ec-input" type="text" />
            </div>
          </div>

          {/* Full-width text areas */}
          <div className="ec-full-row">
            <label className="ec-label" htmlFor="items">
              List your backpack items (bullet-style or comma-separated) *
            </label>
            <textarea id="items" className="ec-textarea" rows={3} />
          </div>

          <div className="ec-full-row">
            <label className="ec-label" htmlFor="cant-leave">
              What's one item you can't leave without? Why? *
            </label>
            <textarea id="cant-leave" className="ec-textarea" rows={3} />
          </div>

          <div className="ec-full-row">
            <label className="ec-label" htmlFor="unexpected">
              What's the most unexpected thing in your bag? *
            </label>
            <textarea id="unexpected" className="ec-textarea" rows={3} />
          </div>

          <div className="ec-full-row">
            <label className="ec-label" htmlFor="why">Why do you carry these items? *</label>
            <textarea id="why" className="ec-textarea" rows={3} />
          </div>

          <div className="ec-check-row">
            <input type="checkbox" id="permission" />
            <label htmlFor="permission">
              I give permission for my submission to be featured on the website. *
            </label>
          </div>
        </div>

        <button className="ec-form-submit-btn">Submit</button>
      </div>

    </Layout>
  )
}

export default EverydayCarryPage

export const Head = () => (
  <>
    <link
      rel="icon"
      type="image/png"
      href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg"
    />
    <title>Everyday Carry</title>
  </>
)