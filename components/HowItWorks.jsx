'use client'

/* ============================================================
   HowItWorks — 3-step explainer with animated badge cycling.
   The useEffect cycles through step badges every 1333ms,
   highlighting the active step card (class: 'lit').
   ============================================================ */

import { useEffect } from 'react'

/* Step data — each has a mock "terminal" UI snippet */
const STEPS = [
  {
    num: '01', title: 'Tap to order',
    desc: 'Pick anything from 25k+ items. Pay in two seconds with saved methods.',
    rows: [
      { label: 'Cart total', value: '₹ 482', lime: true },
      { label: 'Items',      value: '14' },
      { label: 'Delivery',   value: 'FREE', lime: true },
    ],
  },
  {
    num: '02', title: 'Packed at the dark store',
    desc: 'Our nearest store assembles the order in under 90 seconds.',
    rows: [
      { label: 'Picker', value: 'Ravi K.', lime: true },
      { label: 'Status', value: 'Packing · 0:38', lime: true },
    ],
    bar: true,
  },
  {
    num: '03', title: 'Door in 10 minutes',
    desc: 'Your partner picks the optimal route and rings the bell — guaranteed.',
    rows: [
      { label: 'Rider',    value: '⚡ Aman S.', lime: true },
      { label: 'ETA',      value: '6 min', lime: true },
      { label: 'Distance', value: '1.4 km' },
    ],
  },
]

export default function HowItWorks() {
  /* Cycle the active badge + lit step card every 1333ms */
  useEffect(() => {
    const badges = document.querySelectorAll('.step-badge')
    const cards  = document.querySelectorAll('.step')
    if (!badges.length) return

    let i = 0
    const tick = () => {
      badges.forEach((b) => b.classList.remove('active'))
      cards.forEach((c)  => c.classList.remove('lit'))
      badges[i].classList.add('active')
      cards[i].classList.add('lit')
      i = (i + 1) % badges.length
    }
    tick()
    const id = setInterval(tick, 1333)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section" id="how">
      <div className="shell">

        {/* Section header */}
        <div className="section-head reveal">
          <div>
            <div className="section-tag">The flow</div>
            <h2 className="section-title">Tap. Pack. <em>Door.</em></h2>
          </div>
          <p className="section-sub">
            A dark-store within 2 km, smart routing, and partners on standby.
            The whole loop runs in under 10 minutes.
          </p>
        </div>

        <div className="steps-wrap">
          {/* Animated SVG connector line between step badges */}
          <svg className="steps-connector" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path className="conn-base" d="M 60 40 Q 300 -10 600 40 T 1140 40" />
            <path className="conn-anim" d="M 60 40 Q 300 -10 600 40 T 1140 40" />
          </svg>

          <div className="steps">
            {STEPS.map((step, idx) => (
              <div key={step.num} className="step reveal">
                {/* Badge number — toggled active by the interval above */}
                <div className="step-badge">{idx + 1}</div>
                <div className="step-num">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>

                {/* Mini terminal card */}
                <div className="step-visual">
                  {step.rows.map((row, ri) => (
                    <div key={ri} className="step-visual-row">
                      <span>{row.label}</span>
                      <span className={row.lime ? 'lime' : ''}>{row.value}</span>
                    </div>
                  ))}
                  {/* Progress bar for step 2 (packing) */}
                  {step.bar && <div className="step-visual-bar" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
