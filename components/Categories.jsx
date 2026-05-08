'use client'

/* ============================================================
   Categories — 12-column grid of 6 product category cards.
   Each card has a photo background, animated emoji glyph,
   live status chips, and hover lift effect.
   Clicking any card opens an info modal.
   ============================================================ */

import { Ico } from './icons'

/* Category data — bg images from Unsplash (public CDN) */
const CATS = [
  {
    cls: 'cat-1', glyph: '🥬', num: 'Live · Fresh',
    title: 'Daily groceries',
    desc: 'Vegetables, fruits, dairy & more — picked the same morning.',
    time: '8 min', stockLabel: 'IN STOCK', stock: '2,400+',
    tint: 'rgba(120,255,140,0.45)',
    bg: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80',
    modalDesc: 'Browse 2,400+ fresh items — vegetables, fruits, dairy, eggs, and more delivered in 8 minutes.',
  },
  {
    cls: 'cat-2', glyph: '📱', num: 'Live · Tech',
    title: 'Mobiles & accessories',
    desc: 'Latest phones, chargers, earbuds, smartwatches.',
    time: '12 min', stockLabel: 'BRANDS', stock: '60+',
    tint: 'rgba(106,166,255,0.45)',
    bg: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80',
    modalDesc: 'Shop 60+ brands — iPhones, Samsung, OnePlus, earbuds, chargers, cables and more in 12 minutes.',
  },
  {
    cls: 'cat-3', glyph: '💊', num: 'Live · 24/7',
    title: 'Pharmacy',
    desc: 'OTC, prescriptions, wellness — round the clock.',
    time: '9 min', stockLabel: 'AVAILABLE', stock: 'Always',
    tint: 'rgba(255,122,217,0.42)',
    bg: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80',
    modalDesc: 'OTC medicines, prescriptions, wellness supplements, and health devices — available 24/7 in 9 minutes.',
  },
  {
    cls: 'cat-4', glyph: '🎮', num: 'Live · Tech',
    title: 'Electronics & gaming',
    desc: 'Headphones, controllers, smart-home gear.',
    time: '14 min', stockLabel: 'NEW DROPS', stock: '38 today',
    tint: 'rgba(255,181,71,0.45)',
    bg: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200&q=80',
    modalDesc: 'Headphones, gaming controllers, smart speakers, and the latest tech drops — 38 new items today.',
  },
  {
    cls: 'cat-5', glyph: '👶', num: 'Live · Home',
    title: 'Baby & home essentials',
    desc: 'Diapers, formula, cleaning, kitchen.',
    time: '10 min', stockLabel: 'IN STOCK', stock: '1,800+',
    tint: 'rgba(139,109,255,0.42)',
    bg: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=1200&q=80',
    modalDesc: 'Diapers, baby formula, cleaning supplies, kitchen essentials — 1,800+ home products in 10 minutes.',
  },
  {
    cls: 'cat-6', glyph: '🍕', num: 'Live · Eats',
    title: 'Hot meals & snacks',
    desc: 'Fresh-baked, chilled drinks, ready-to-eat.',
    time: '11 min', stockLabel: 'HOT NOW', stock: '280+',
    tint: 'rgba(255,140,90,0.45)',
    bg: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80',
    modalDesc: 'Hot meals, fresh-baked goods, chilled drinks and 280+ ready-to-eat options delivered in 11 minutes.',
  },
]

export default function Categories({ openModal }) {
  return (
    <section className="section" id="categories">
      <div className="shell">

        {/* Section header */}
        <div className="section-head reveal">
          <div>
            <div className="section-tag">Catalog</div>
            <h2 className="section-title">Anything you need, in <em>one tap.</em></h2>
          </div>
          <p className="section-sub">
            From midnight maggi to a new charger before your meeting — 25,000+ products, ready and routed.
          </p>
        </div>

        {/* 12-column responsive grid */}
        <div className="cat-grid">
          {CATS.map((c) => (
            <div
              key={c.cls}
              className={`cat ${c.cls} reveal`}
              style={{ '--cat-tint': c.tint }}
              onClick={() => openModal({
                type: 'info',
                icon: <span style={{ fontSize: 28 }}>{c.glyph}</span>,
                title: c.title,
                desc: c.modalDesc,
              })}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openModal({ type: 'info', icon: <span style={{ fontSize: 28 }}>{c.glyph}</span>, title: c.title, desc: c.modalDesc })}
            >
              {/* Photo + chips + glyph */}
              <div className="cat-media">
                <div className="cat-bg" style={{ backgroundImage: `url(${c.bg})` }}></div>
                <div className="cat-chip cat-chip-tag">{c.num}</div>
                <div className="cat-chip cat-chip-time"><strong>⚡ {c.time}</strong></div>
                <div className="cat-glyph">{c.glyph}</div>
              </div>

              {/* Text body */}
              <div className="cat-body">
                <div className="cat-title">{c.title}</div>
                <p className="cat-desc">{c.desc}</p>
                <div className="cat-meta">
                  <div className="cat-stat lime">
                    {c.stockLabel}
                    <strong>{c.stock}</strong>
                  </div>
                  <div className="cat-arrow">
                    <Ico.Arrow style={{ width: 12, height: 12 }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
