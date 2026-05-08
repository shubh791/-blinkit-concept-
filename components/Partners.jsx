'use client'

/* ============================================================
   Partners — two-column section:
     Left:  staggered partner profile cards
     Right: 4 perk tiles + CTA buttons
   Both CTA buttons open the modal.
   ============================================================ */

import { Ico } from './icons'

const PARTNERS = [
  { name: 'Aman Sharma', meta: 'KORAMANGALA · 4.98 ★', initials: 'AS', deliveries: '2,847', online: true },
  { name: 'Priya Mehta', meta: 'INDIRANAGAR · 4.96 ★', initials: 'PM', deliveries: '3,102', online: true },
  { name: 'Ravi Kumar',  meta: 'HSR LAYOUT · 4.99 ★',  initials: 'RK', deliveries: '4,210', online: true },
  { name: 'Sara Iqbal',  meta: 'WHITEFIELD · 4.97 ★',  initials: 'SI', deliveries: '1,934', online: false },
]

const PERKS = [
  { icon: <Ico.Bolt />,   title: 'Earn ₹35k+ /month',  desc: 'Flexible shifts, daily payouts. Top earners cross ₹50k.' },
  { icon: <Ico.Shield />, title: 'Insurance & gear',    desc: 'Free helmet, raincoat, medical cover from day one.' },
  { icon: <Ico.Truck />,  title: 'EV-first fleet',      desc: 'Subsidised electric scooters with charging stations.' },
  { icon: <Ico.Repeat />, title: 'Choose your hours',   desc: 'Work mornings, nights, weekends — entirely up to you.' },
]

export default function Partners({ openModal }) {
  const onPartner = () => openModal({
    type: 'info',
    icon: <Ico.Truck style={{ width: 22, height: 22 }} />,
    title: 'Join the Fleet',
    desc: 'Join 12,000+ delivery partners across India. Earn ₹35k+ per month with flexible hours and daily payouts.',
  })

  const onCalculator = () => openModal({
    type: 'info',
    icon: <Ico.Bolt style={{ width: 22, height: 22 }} />,
    title: 'Earnings Calculator',
    desc: 'Based on your city and hours, top partners earn ₹35,000–₹55,000/month. Daily payout, no waiting.',
  })

  return (
    <section className="partners-wrap" id="partners">
      <div className="shell">

        {/* Section header */}
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Our partners</div>
            <h2 className="section-title">Ride with us. <em>Earn with us.</em></h2>
          </div>
          <p className="section-sub">
            12,000+ delivery partners power the 10-minute promise. Join the fleet
            behind every ring of your doorbell.
          </p>
        </div>

        <div className="partners-grid">

          {/* ── Left: staggered partner cards ── */}
          <div className="partners-visual reveal">
            <div className="partner-cards">
              {PARTNERS.map((p, i) => (
                <div key={i} className="partner-card">
                  {/* Avatar with optional online dot */}
                  <div className={`partner-avatar ${p.online ? 'online' : ''}`}>
                    {p.initials}
                  </div>
                  <div>
                    <div className="partner-name">{p.name}</div>
                    <div className="partner-meta">{p.meta}</div>
                  </div>
                  <div className="partner-stat">
                    <strong>{p.deliveries}</strong>
                    DELIVERIES
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: perks + CTAs ── */}
          <div className="reveal">
            <p className="hero-sub" style={{ marginBottom: 28 }}>
              Whether you ride two hours a day or twelve, we make sure every
              minute pays. Daily payouts, fair routing, and gear that lasts.
            </p>

            {/* 2×2 perk grid */}
            <div className="partner-perks">
              {PERKS.map((p, i) => (
                <div key={i} className="perk">
                  <div className="perk-icon">{p.icon}</div>
                  <h4 className="perk-title">{p.title}</h4>
                  <p className="perk-desc">{p.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <button className="btn btn-primary btn-large" onClick={onPartner}>
                Become a partner
                <span className="btn-pill-icon"><Ico.Arrow style={{ width: 10, height: 10 }} /></span>
              </button>
              <button className="btn btn-ghost btn-glow btn-large" onClick={onCalculator}>
                View earnings calculator
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
