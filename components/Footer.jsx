'use client'

/* ============================================================
   Footer — 4-column grid with:
     Col 1: brand logo + blurb + developer connect card
     Col 2: Shop links (with icons)
     Col 3: Company links (with icons)
     Col 4: Help links (with icons)

   All nav links open an info modal.
   Developer connect links open the 'dev' modal.
   ============================================================ */

import { Ico } from './icons'

/* Footer link columns — each item has an icon + modal payload */
const COLUMNS = [
  {
    heading: 'Shop',
    items: [
      { label: 'Groceries',    icon: <Ico.Grocery />,   desc: 'Browse 2,400+ fresh items — vegetables, fruits, dairy, and more.' },
      { label: 'Mobiles',      icon: <Ico.Bolt />,      desc: 'Shop 60+ phone brands, accessories, chargers, and earbuds.' },
      { label: 'Pharmacy',     icon: <Ico.Shield />,    desc: 'OTC medicines, prescriptions, and wellness — available 24/7.' },
      { label: 'Electronics',  icon: <Ico.Tag />,       desc: 'Headphones, gaming gear, smart-home devices and new tech drops.' },
      { label: 'Snacks',       icon: <Ico.Cart />,      desc: 'Chips, drinks, chocolates, and 280+ ready-to-eat options.' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About',          icon: <Ico.Info />,       desc: 'Blinkit is India\'s leading instant commerce platform. Delivered in 10 minutes.' },
      { label: 'Press',          icon: <Ico.Newspaper />,  desc: 'Latest news, press releases, and media resources about Blinkit.' },
      { label: 'Careers',        icon: <Ico.Briefcase />,  desc: 'Join a 3,000+ team building the future of instant commerce.' },
      { label: 'Sustainability', icon: <Ico.Leaf />,       desc: 'EV-first fleet, compostable packaging, and net-zero by 2030.' },
    ],
  },
  {
    heading: 'Get help',
    items: [
      { label: 'Contact us',        icon: <Ico.Phone />,     desc: 'Reach our 24/7 support team via chat, call, or email.' },
      { label: 'Track your order',  icon: <Ico.Package />,   desc: 'Live map tracking, rider ETA and push notifications for every order.' },
      { label: 'Become a partner',  icon: <Ico.Truck />,     desc: 'Join 12,000+ delivery partners. Earn ₹35k+/month with flexible shifts.' },
      { label: 'Refund policy',     icon: <Ico.RotateCcw />, desc: 'Full refund within 24 hours for any damaged or missing item. No questions asked.' },
    ],
  },
]

export default function Footer({ openModal }) {
  /* Open info modal for a standard footer link */
  const onLink = (label, icon, desc) => openModal({
    type: 'info',
    icon: <span style={{ display: 'flex', color: 'var(--lime)' }}>{icon}</span>,
    title: label,
    desc,
  })

  /* Open developer profile modal */
  const onDev = (e) => {
    e.preventDefault()
    openModal({ type: 'dev' })
  }

  return (
    <footer className="footer" id="help">
      <div className="shell">
        <div className="footer-grid">

          {/* ── Col 1: brand + developer card ── */}
          <div>
            <a href="#" className="logo">
              <span className="logo-mark">B</span>
              <span>blinkit<span style={{ color: 'var(--lime)' }}>.</span></span>
            </a>
            <p className="footer-blurb">
              The everything-app for the things you need right now.
              Packed in 90 seconds. Door in 10 minutes.
            </p>

            {/* Developer connect card — clicking social links opens dev modal */}
            <div className="dev-connect">
              <div className="dev-connect-label">Connect with developer</div>
              <div className="dev-connect-name">Shubham Panghal</div>
              <div className="dev-links">
                <a
                  href="https://www.linkedin.com/in/shubham-panghal/"
                  onClick={onDev}
                  className="dev-link"
                >
                  <Ico.Linkedin /> LinkedIn
                </a>
                <a
                  href="https://github.com/shubh791"
                  onClick={onDev}
                  className="dev-link"
                >
                  <Ico.Github /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* ── Cols 2-4: link columns ── */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="footer-col">
              <h4>{col.heading}</h4>
              <ul>
                {col.items.map(({ label, icon, desc }) => (
                  <li key={label}>
                    {/* Each link is a button with icon + label */}
                    <button
                      className="footer-link-btn"
                      onClick={() => onLink(label, icon, desc)}
                    >
                      {/* Small icon rendered at 13×13 */}
                      <span className="footer-link-icon">
                        {icon}
                      </span>
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="footer-bot">
          <span>© 2026 BLINKIT — ORIGINAL CONCEPT DESIGN</span>
          <span>MADE FOR THE 10-MINUTE GENERATION</span>
        </div>
      </div>
    </footer>
  )
}
