'use client'

/* ============================================================
   CTA — full-width call-to-action banner with radial lime glow.
   All buttons open modals (UI only — no real navigation).
   ============================================================ */

import { Ico } from './icons'

export default function CTA({ openModal }) {
  const onTry = () => openModal({
    type: 'info',
    icon: <Ico.Bolt style={{ width: 22, height: 22 }} />,
    title: 'Try Blinkit',
    desc: 'Set your delivery location to start browsing 25,000+ products. Your first order usually arrives in under 9 minutes.',
  })

  const onPartner = () => openModal({
    type: 'info',
    icon: <Ico.Truck style={{ width: 22, height: 22 }} />,
    title: 'Become a Partner',
    desc: 'Join 12,000+ delivery partners. Earn ₹35k+ per month with flexible shifts and daily payouts.',
  })

  const onAppStore = () => openModal({
    type: 'info',
    icon: <Ico.Apple style={{ width: 22, height: 22 }} />,
    title: 'Download on App Store',
    desc: 'Search "Blinkit" on the iOS App Store, or scan the QR code in-app. Requires iOS 14 or later.',
  })

  const onPlayStore = () => openModal({
    type: 'info',
    icon: <Ico.Play style={{ width: 22, height: 22 }} />,
    title: 'Get it on Play Store',
    desc: 'Search "Blinkit" on Google Play, or scan the QR code in-app. Requires Android 8.0 or later.',
  })

  return (
    <section className="shell">
      <div className="cta reveal">
        <h2>
          Your next order arrives <em>before</em><br />
          you finish reading this.
        </h2>
        <p>
          Download the app, set your location, and tap. We&apos;ll handle the rest —
          usually in eight minutes flat.
        </p>

        {/* Primary action row */}
        <div className="cta-buttons">
          <button className="btn btn-primary btn-large" onClick={onTry}>
            Try Blinkit
            <span className="btn-pill-icon"><Ico.Arrow style={{ width: 10, height: 10 }} /></span>
          </button>
          <button className="btn btn-ghost btn-glow btn-large" onClick={onPartner}>
            Become a partner
          </button>
        </div>

        {/* App store badges row */}
        <div className="cta-stores">
          <button className="store" onClick={onAppStore}>
            <Ico.Apple />
            <div>
              <span className="store-sub">Download on</span>
              <span className="store-name">App Store</span>
            </div>
          </button>
          <button className="store" onClick={onPlayStore}>
            <Ico.Play />
            <div>
              <span className="store-sub">Get it on</span>
              <span className="store-name">Play Store</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
