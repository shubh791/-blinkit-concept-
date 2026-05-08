'use client'

/* ============================================================
   StatsBand — 4-cell horizontal band showing headline metrics.
   No interactivity; purely decorative / trust-building.
   ============================================================ */

export default function StatsBand() {
  const stats = [
    { num: '10', unit: 'min',  label: 'Average delivery time' },
    { num: '25', unit: 'k+',   label: 'Products in catalog' },
    { num: '1.2', unit: 'k',   label: 'Neighborhoods served' },
    { num: '4.9', unit: '★',   label: 'Customer rating' },
  ]

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="shell">
        <div className="stats-band reveal">
          {stats.map(({ num, unit, label }) => (
            <div key={label} className="stat-cell">
              <div className="stat-big">
                {num}<span className="unit">{unit}</span>
              </div>
              <div className="stat-big-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
