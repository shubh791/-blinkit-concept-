'use client'

/* ============================================================
   AppShowcase — split layout: phone mockup on left, feature
   list on right. The phone screen is a fully static replica
   of the real Blinkit app UI. Feature cards open modals.
   ============================================================ */

import { Ico } from './icons'

/* Feature list data */
const FEATURES = [
  {
    icon: <Ico.Bolt />,
    title: '10-minute promise',
    desc: 'Live ETA + free re-delivery if we miss the mark. Yes, really.',
    modalDesc: 'We guarantee delivery in 10 minutes or less. Miss it? Your next delivery is on us.',
  },
  {
    icon: <Ico.Tag />,
    title: 'Real prices, no surge',
    desc: 'MRP-locked. The price you see in the cart is the price you pay.',
    modalDesc: 'Every product is sold at MRP — zero convenience fee, zero surge pricing, ever.',
  },
  {
    icon: <Ico.Shield />,
    title: 'Quality, sealed',
    desc: 'Tamper-proof packs, cold-chain dairy, partner-rated freshness.',
    modalDesc: 'All orders are packed in tamper-evident bags. Dairy items are cold-chain managed from store to door.',
  },
  {
    icon: <Ico.Repeat />,
    title: 'Re-order in one tap',
    desc: 'Your weekly cart, saved. Tap once on Sunday and forget about it.',
    modalDesc: 'Save any order as a favourite and re-order in a single tap. Your weekly essentials, automated.',
  },
]

/* Phone grid items [emoji, label] */
const PHONE_TILES = [
  ['🥦','Veggies'], ['🥛','Dairy'],   ['🍞','Bakery'],
  ['📱','Mobiles'], ['🎧','Audio'],   ['💊','Pharma'],
  ['🍕','Snacks'],  ['🧴','Care'],    ['🎮','Gaming'],
]

export default function AppShowcase({ openModal }) {
  const onViewCart = () => openModal({
    type: 'info',
    icon: <Ico.Cart style={{ width: 22, height: 22 }} />,
    title: 'Your Cart',
    desc: 'Set your delivery location to start adding items to your cart.',
  })

  return (
    <section className="section" id="app">
      <div className="shell">
        <div className="showcase">

          {/* ── Phone mockup ── */}
          <div className="phone reveal">
            <div className="phone-screen">
              <div className="phone-status">
                <span>9:41</span>
                <span>● ● ●</span>
              </div>

              {/* Search bar */}
              <div className="phone-search">
                <Ico.Search /> Search &quot;milk, eggs, charger…&quot;
              </div>

              {/* Hero banner inside phone */}
              <div className="phone-banner">
                <div>10-min<br />delivery is here.</div>
                <small>NEW</small>
              </div>

              {/* 3×3 category tile grid */}
              <div className="phone-grid">
                {PHONE_TILES.map(([emoji, label], i) => (
                  <div key={i} className="phone-tile">
                    <div className="phone-tile-emoji">{emoji}</div>
                    <div>{label}</div>
                  </div>
                ))}
              </div>

              {/* Sticky cart bar at bottom */}
              <div className="phone-bar">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)' }}>
                  3 items · ₹ 240
                </div>
                <button className="phone-bar-cart" onClick={onViewCart}>
                  <Ico.Cart /> View cart
                </button>
              </div>
            </div>
          </div>

          {/* ── Right: feature list ── */}
          <div className="reveal">
            <div className="section-tag">The app</div>
            <h2 className="section-title" style={{ marginBottom: 18 }}>
              One tap. <em>One window.</em>
            </h2>
            <p className="hero-sub" style={{ marginBottom: 28 }}>
              Built for speed — minimal taps, smart suggestions, and every status
              update right when you need it. Not a frame later.
            </p>

            <div className="showcase-list">
              {FEATURES.map((f) => (
                <button
                  key={f.title}
                  className="feature"
                  onClick={() => openModal({
                    type: 'info',
                    icon: <span style={{ display: 'flex', color: 'var(--lime)' }}>{f.icon}</span>,
                    title: f.title,
                    desc: f.modalDesc,
                  })}
                  style={{ width: '100%', textAlign: 'left', background: 'var(--bg-1)', cursor: 'pointer' }}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <h4 className="feature-title">{f.title}</h4>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
