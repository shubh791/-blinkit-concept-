'use client'

/* ============================================================
   Nav — sticky glass navbar.
   Desktop : logo + pill links + location + open-app
   Mobile  : logo + hamburger → full-screen slide-down overlay
             with dedicated ✕ close button inside the drawer.
   "Open app" is hidden on mobile (shown only ≥ 980px via CSS).
   ============================================================ */

import { useState } from 'react'
import { Ico } from './icons'

export default function Nav({ openModal }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu  = () => setMenuOpen(true)
  const closeMenu = () => setMenuOpen(false)

  const onLocation = () => {
    closeMenu()
    openModal({
      type: 'info',
      icon: <Ico.Pin style={{ width: 22, height: 22 }} />,
      title: 'Set Delivery Location',
      desc: 'Enter your address to find the nearest dark-store and browse 25,000+ products available near you.',
    })
  }

  const onOpenApp = () => {
    closeMenu()
    openModal({
      type: 'info',
      icon: <Ico.Download style={{ width: 22, height: 22 }} />,
      title: 'Get the Blinkit App',
      desc: 'Available on iOS and Android. Search "Blinkit" on the App Store or Google Play to get started.',
    })
  }

  const links = [
    { label: 'Categories',   href: '#categories' },
    { label: 'How it works', href: '#how' },
    { label: 'App',          href: '#app' },
    { label: 'Partners',     href: '#partners' },
    { label: 'Help',         href: '#help' },
  ]

  return (
    <nav className="nav">
      <div className="shell nav-inner">

        {/* Brand */}
        <a href="#" className="logo">
          <span className="logo-mark">B</span>
          <span>blinkit<span style={{ color: 'var(--lime)' }}>.</span></span>
        </a>

        {/* Desktop pill nav — hidden below 980px via CSS */}
        <ul className="nav-links">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>
                <span className="nav-dot" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop action buttons */}
        <div className="nav-actions">
          {/* Hidden on mobile via .nav-ghost-hide CSS class */}
          <button
            className="btn btn-ghost nav-ghost-hide"
            style={{ padding: '10px 16px', fontSize: '14px' }}
            onClick={onLocation}
          >
            <Ico.Pin /> Set location
          </button>

          {/* "Open app" — hidden on mobile via .nav-cta-app CSS class */}
          <button
            className="btn btn-primary nav-cta-app"
            style={{ padding: '10px 18px', fontSize: '14px' }}
            onClick={onOpenApp}
          >
            Open app <Ico.Arrow />
          </button>

          {/* Hamburger — shown only on mobile via CSS */}
          <button
            className="nav-menu-btn"
            onClick={menuOpen ? closeMenu : openMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen
              ? <Ico.X    style={{ width: 18, height: 18 }} />
              : <Ico.Menu />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {menuOpen && (
        <div className="nav-mobile-overlay">

          {/* Dedicated close button inside the drawer */}
          <button className="nav-mobile-close" onClick={closeMenu} aria-label="Close menu">
            <Ico.X style={{ width: 16, height: 16 }} />
          </button>

          {/* Nav links */}
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="nav-mobile-link"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <div className="nav-mobile-sep" />

          {/* Mobile CTA row */}
          <div className="nav-mobile-actions">
            <button className="btn btn-ghost" style={{ fontSize: 14 }} onClick={onLocation}>
              <Ico.Pin /> Set location
            </button>
            <button className="btn btn-primary" style={{ fontSize: 14 }} onClick={onOpenApp}>
              Open app <Ico.Arrow />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
