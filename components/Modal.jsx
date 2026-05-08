'use client'

/* ============================================================
   Modal — renders a backdrop + panel with two display modes:
     type: 'dev'   → developer contact card (Shubham Panghal)
     type: 'info'  → generic info/coming-soon card

   Props:
     data     — modal payload ({ type, icon?, title?, desc? })
     onClose  — callback to clear modal state in parent
   ============================================================ */

import { useEffect } from 'react'
import { Ico } from './icons'

export default function Modal({ data, onClose }) {
  /* Close on Escape key */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  /* Lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    /* Clicking the backdrop (not the panel) closes the modal */
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>

        {/* Close button — top-right corner */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <Ico.X />
        </button>

        {data.type === 'dev' ? (
          /* ── Developer contact card ─────────────────────── */
          <DevContent onClose={onClose} />
        ) : (
          /* ── Generic info / coming-soon card ────────────── */
          <InfoContent data={data} onClose={onClose} />
        )}
      </div>
    </div>
  )
}

/* ── Sub-component: developer profile ── */
function DevContent({ onClose }) {
  return (
    <>
      {/* Avatar with online indicator */}
      <div className="modal-dev-avatar">SP</div>

      <div className="modal-dev-name">Shubham Panghal</div>
      <div className="modal-dev-role">Full-stack Developer</div>

      {/* Project note */}
      <div className="modal-dev-note">
        Built this Blinkit concept UI in Next.js — dark theme, 10-min delivery
        aesthetic, animated hero and every section coded from scratch.
      </div>

      {/* Real external links live inside the modal */}
      <div className="modal-actions">
        <a
          href="https://www.linkedin.com/in/shubham-panghal/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ fontSize: 13, padding: '10px 16px' }}
        >
          <Ico.Linkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/shubh791"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ fontSize: 13, padding: '10px 16px' }}
        >
          <Ico.Github /> GitHub
        </a>
        <button
          className="btn btn-ghost"
          onClick={onClose}
          style={{ fontSize: 13, padding: '10px 16px', marginLeft: 'auto' }}
        >
          Close
        </button>
      </div>
    </>
  )
}

/* ── Sub-component: generic info card ── */
function InfoContent({ data, onClose }) {
  return (
    <>
      {/* Icon badge */}
      {data.icon && (
        <div className="modal-icon">{data.icon}</div>
      )}

      <h3 className="modal-title">{data.title}</h3>
      <p className="modal-desc">{data.desc || 'This feature is coming soon. Stay tuned!'}</p>

      <div className="modal-actions">
        <button className="btn btn-primary" onClick={onClose} style={{ fontSize: 13, padding: '10px 20px' }}>
          Got it
        </button>
      </div>
    </>
  )
}
