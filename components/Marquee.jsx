'use client'

/* ============================================================
   Marquee — infinite-scroll ticker showing product categories.
   Items are doubled so the CSS translate(-50%) loop is seamless.
   Hovering pauses the animation via CSS (animation-play-state).
   ============================================================ */

import React from 'react'

/* Full list of marquee items [emoji, label] */
const ITEMS = [
  ['🥦', 'Fruits & vegetables'],
  ['📱', 'Mobiles in 10 minutes'],
  ['🥤', 'Cold drinks at 4°C'],
  ['🐾', 'Pet food at midnight'],
  ['🎁', 'Last-minute gifts'],
  ['💊', 'Pharmacy 24/7'],
  ['🥐', 'Fresh bakery'],
  ['🔌', 'Phone chargers'],
  ['🍔', 'Hot meals'],
  ['📒', 'Stationery'],
  ['🧴', 'Cleaning supplies'],
  ['💄', 'Beauty essentials'],
]

export default function Marquee() {
  /* Double the array so the CSS loop is seamless */
  const all = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {all.map(([emoji, text], i) => (
          <React.Fragment key={i}>
            <span className="marquee-item">
              <span className="emoji">{emoji}</span>
              {text}
            </span>
            {/* Lime dot separator between items */}
            <span className="marquee-sep"></span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
