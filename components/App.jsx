'use client'

/* ============================================================
   App — root client component.
   Holds the modal state and passes openModal down to every
   section that needs it. Modal is rendered as a portal-like
   overlay at the top of the tree so it sits above everything.
   ============================================================ */

import { useState, useCallback, useEffect } from 'react'

import Nav         from './Nav'
import Hero        from './Hero'
import Marquee     from './Marquee'
import Categories  from './Categories'
import StatsBand   from './StatsBand'
import HowItWorks  from './HowItWorks'
import AppShowcase from './AppShowcase'
import Partners    from './Partners'
import CTA         from './CTA'
import Footer      from './Footer'
import Modal       from './Modal'

export default function App() {
  /* modal = null → closed; modal = { type, ... } → open */
  const [modal, setModal] = useState(null)

  /* Stable references — prevent child re-renders on unrelated state changes */
  const openModal  = useCallback((data) => setModal(data), [])
  const closeModal = useCallback(() => setModal(null), [])

  /* Scroll-reveal — add .in to every .reveal element when it enters viewport */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io  = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* Fixed decorative layers (behind all content) */}
      <div className="ambient" />
      <div className="grid-overlay" />

      {/* Page sections — each receives openModal so any interactive
          element can trigger the modal overlay */}
      <Nav         openModal={openModal} />
      <Hero        openModal={openModal} />
      <Marquee />
      <Categories  openModal={openModal} />
      <StatsBand />
      <HowItWorks />
      <AppShowcase openModal={openModal} />
      <Partners    openModal={openModal} />
      <CTA         openModal={openModal} />
      <Footer      openModal={openModal} />

      {/* Modal overlay — conditionally rendered at root level */}
      {modal && <Modal data={modal} onClose={closeModal} />}
    </>
  )
}
