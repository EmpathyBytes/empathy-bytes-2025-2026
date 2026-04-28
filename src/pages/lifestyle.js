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

// placeholder data for the grid popup **change to real data when available**
const SUBMISSIONS = [
  {
    id: 1,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 2,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 3,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 4,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 5,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 6,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 7,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 8,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 9,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 10,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 11,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  {
    id: 12,
    name: "Michelle",
    major: "Computational Media",
    year: "Junior",
    items: "Laptop, Buzzcard, Keys, iPad, Pens/Pencils",
    cantLeaveWithout: "My iPad for digital sketching and note-taking.",
    unexpected: "A hand-knitted stress ball.",
    why: "I'm constantly moving between the library and the design studio.",
  },
  // Add more entries here
]

// placeholder data for the accordion **change to real data when available**
const ACCORDIONS = [
  {
    q: "Most common items across campus",
    items: [
      { label: "Laptop" },
      { label: "Buzzcard" },
      { label: "Keys" },
      { label: "iPad" },
      { label: "Pens/Pencils" }
    ]
  },
  {
    q: "What designers carry vs engineers",
    items: [
      { label: "Sketchbook" },
      { label: "Stylus" },
      { label: "Pantone" },
      { label: "Calculator" },
      { label: "Lab Notebook" }
    ]
  },
  {
    q: "Top 5 unexpected items",
    items: [
      { label: "Kitchen Knife" },
      { label: "Stress Ball" },
      { label: "Spare Socks" },
      { label: "Dictionary" },
      { label: "Succulent" }
    ]
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
      {open && (
        <div className="ec-accordion-body">
          <div className="ec-sub-item-row">
            {item.items.map((sub, idx) => (
              <div key={idx} className="ec-sub-item-container">
                <span className="ec-sub-item-label">{sub.label}</span>
                <div className="ec-sub-item-placeholder"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Modal Popup ─────────────────────────────────────────────────────────────
function ItemModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="ec-modal-overlay" onClick={onClose}>
      <div className="ec-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="ec-modal-close" onClick={onClose}>&times;</button>
        <div className="ec-modal-grid">
          <div className="ec-modal-image-box"></div>
          <div className="ec-modal-info">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Major:</strong> {item.major}</p>
            <p><strong>Year:</strong> {item.year}</p>
            <div className="ec-modal-section">
              <strong>List of backpack items:</strong>
              <p>{item.items}</p>
            </div>
            <div className="ec-modal-detail-item">
              <strong>Why do you carry these items?</strong>
              <p>{item.why}</p>
            </div>
            <div className="ec-modal-detail-item">
            <strong>What's one item you can't leave without? Why?</strong>
            <p>{item.cantLeaveWithout}</p>
          </div>
          </div>
        </div>
        <div className="ec-modal-details">
          <div className="ec-modal-detail-item">
            <strong>What's the most unexpected thing in your bag?</strong>
            <p>{item.unexpected}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
function EverydayCarryPage() {
  const [activeFilter, setActiveFilter] = useState("Design & Creative")
  const [dragOver, setDragOver] = useState(false)
  const [fileName, setFileName] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    if (e.dataTransfer.files[0]) setFileName(e.dataTransfer.files[0].name)
  }

  const displayItems = [...SUBMISSIONS, ...Array(11).fill({})].slice(0, 12);

  return (
    <Layout>
      <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      <div className="ec-hero">
        <div className="ec-hero-bg">
          <div className="ec-hero-placeholder-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="ec-hero-placeholder-cell"></div>
            ))}
          </div>
        </div>
        <div className="ec-hero-overlay" />
        <div className="ec-hero-content">
          <h1 className="ec-hero-title">Everyday Carry</h1>
          <button className="ec-submit-btn" onClick={() => document.getElementById("submit-yours").scrollIntoView({ behavior: "smooth" })}>
            Submit Yours
          </button>
          <a href="#gallery" className="ec-explore-link">
            <span>Explore</span>
            <svg className="ec-explore-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
          </a>
        </div>
      </div>

      <div className="ec-filter-bar" id="gallery">
        {CATEGORIES.map((cat) => (
          <button key={cat} className={`ec-filter-pill${activeFilter === cat ? " active" : ""}`} onClick={() => setActiveFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="ec-grid-wrapper">
        <div className="ec-grid-section">
          <div className="ec-grid">
            {displayItems.map((item, i) => (
              <div key={i} className="ec-grid-cell" onClick={() => item.name && setSelectedItem(item)}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="ec-accordion-wrapper">
        <div className="ec-accordion-section">
          {ACCORDIONS.map((item, i) => (
            <AccordionItem key={i} item={item} isLast={i === ACCORDIONS.length - 1} />
          ))}
        </div>
      </div>

      <div className="ec-about-section">
        <h2 className="ec-about-title">About</h2>
        <p className="ec-about-body">Everyday Carry is a visual project documenting the items students at Georgia Tech carry in their backpacks each day.</p>
        <p className="ec-about-body">By bringing these items into view, the project highlights the diversity of work, interests, and lifestyles within our community.</p>
        <div className="ec-made-by">Made by <span className="ec-made-by-link">Empathy Bytes</span></div>
      </div>

      <div className="ec-submit-section" id="submit-yours">
        <h2 className="ec-submit-title">Submit Yours</h2>
        <p className="ec-submit-subtitle">Share what you carry to be part of the project.</p>
        <div className="ec-form-grid">
          <div className={`ec-upload-box ${dragOver ? 'drag-over' : ''}`} onDragOver={(e) => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={handleDrop}>
            <svg className="ec-upload-icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
            <p>{fileName ? fileName : "Choose a file or drag and drop"}</p>
          </div>
          <div className="ec-field-group">
            <label className="ec-label">Name</label><input type="text" className="ec-input" />
            <label className="ec-label">Major *</label><input type="text" className="ec-input" required />
            <label className="ec-label">Year *</label><input type="text" className="ec-input" required />
          </div>
          <div className="ec-field-group ec-full-row">
            <label className="ec-label">List your backpack items *</label><textarea className="ec-textarea" required />
          </div>
          <div className="ec-check-row">
            <input type="checkbox" id="permission" required /><label htmlFor="permission">I give permission for my submission to be featured. *</label>
          </div>
        </div>
        <button className="ec-form-submit-btn">Submit</button>
      </div>
    </Layout>
  )
}

export default EverydayCarryPage