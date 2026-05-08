'use client'

/* ============================================================
   Hero — full-width landing section with:
     • Left: headline, sub-copy, CTA buttons, stat strip
     • Right: RiderStage with floating product cards
   All CTAs open the modal instead of navigating away.
   ============================================================ */

import { Ico } from './icons'

export default function Hero({ openModal }) {
  const onOrder = () => openModal({
    type: 'info',
    icon: <Ico.Bolt style={{ width: 22, height: 22 }} />,
    title: 'Order in 10 Minutes',
    desc: 'Set your delivery location first to browse 25,000+ products across groceries, electronics, pharmacy, and more.',
  })

  return (
    <section className="hero">
      <div className="shell hero-grid">

        {/* ── Left column: copy + CTAs ── */}
        <div className="hero-left">
          <div className="eyebrow">
            <span className="eyebrow-dot">⚡</span>
            <span>Live in 1,200+ neighborhoods · 10-min average</span>
          </div>

          <h1 className="headline">
            Don&apos;t just <span className="strike">think</span> it.<br />
            Do <span className="lime">Blinkit</span>
          </h1>

          <p className="hero-sub">
            Groceries, gadgets, medicines, and the random thing you suddenly need
            at 11 PM — at your door before the kettle finishes whistling.
          </p>

          <div className="hero-cta">
            <button className="btn btn-primary btn-large" onClick={onOrder}>
              Order in 10 minutes
              <span className="btn-pill-icon"><Ico.Arrow style={{ width: 10, height: 10 }} /></span>
            </button>
            {/* Smooth-scrolls to the How It Works section */}
            <a href="#how" className="btn btn-ghost btn-glow btn-large">
              <Ico.Play style={{ width: 14, height: 14 }} /> See how it works
            </a>
          </div>

          {/* Quick stats strip */}
          <div className="hero-stats">
            <div>
              <div className="stat-num"><span className="accent">8</span>m 42s</div>
              <div className="stat-label">Avg delivery</div>
            </div>
            <div>
              <div className="stat-num">25k+</div>
              <div className="stat-label">SKUs in stock</div>
            </div>
            <div>
              <div className="stat-num">4.9<span className="accent">★</span></div>
              <div className="stat-label">App rating</div>
            </div>
          </div>
        </div>

        {/* ── Right column: animated rider stage ── */}
        <RiderStage />
      </div>
    </section>
  )
}

/* ── Rider stage with floating product cards ── */
function RiderStage() {
  return (
    <div className="stage">
      {/* Decorative background rings */}
      <div className="stage-frame">
        <div className="stage-rings"></div>
      </div>

      {/* Rider photo + live badge */}
      <div className="rider">
        <div className="rider-tag">LIVE · ON ROUTE</div>
        <img src="/assets/rider.png" alt="Blinkit delivery partner" className="rider-img" />
      </div>

      {/* Floating product category cards — each animates with a different delay */}
      <div className="float f-grocery">
        <div className="float-icon icon-bg-green">🥦</div>
        <div className="float-meta">
          <div className="float-title">Fresh groceries</div>
          <div className="float-sub">8 MIN · 412 ITEMS</div>
        </div>
      </div>

      <div className="float f-mobile">
        <div className="float-icon icon-bg-blue">📱</div>
        <div className="float-meta">
          <div className="float-title">Mobiles &amp; tech</div>
          <div className="float-sub">12 MIN · 86 ITEMS</div>
        </div>
      </div>

      <div className="float f-electronics">
        <div className="float-icon icon-bg-amber">🎧</div>
        <div className="float-meta">
          <div className="float-title">Electronics</div>
          <div className="float-sub">10 MIN · 240 ITEMS</div>
        </div>
      </div>

      <div className="float f-fashion">
        <div className="float-icon icon-bg-pink">👟</div>
        <div className="float-meta">
          <div className="float-title">Daily fashion</div>
          <div className="float-sub">15 MIN · 180 ITEMS</div>
        </div>
      </div>

      <div className="float f-pharma">
        <div className="float-icon icon-bg-violet">💊</div>
        <div className="float-meta">
          <div className="float-title">Pharmacy</div>
          <div className="float-sub">9 MIN · 24/7 OPEN</div>
        </div>
      </div>

      {/* ETA card — uses lime background to stand out */}
      <div className="float f-eta float-eta">
        <div className="float-icon" style={{ background: 'rgba(10,10,10,0.12)', color: '#0a0a0a' }}>
          <Ico.Bolt />
        </div>
        <div className="float-meta">
          <div className="float-title">Order #4827</div>
          <div className="float-sub">ETA · 6 MIN</div>
        </div>
      </div>

      {/* Dotted route lines connecting rider to destination */}
      <svg className="path-svg" viewBox="0 0 400 400" preserveAspectRatio="none">
        <path d="M40,80 Q200,160 380,120" stroke="rgba(201,255,61,0.4)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
        <path d="M30,260 Q200,320 380,260" stroke="rgba(201,255,61,0.25)" strokeWidth="1.5" strokeDasharray="4 6" fill="none" />
      </svg>
    </div>
  )
}
