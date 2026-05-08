export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#07080a',
      color: '#f5f6f7',
      fontFamily: 'system-ui, sans-serif',
      gap: 16,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 13,
        background: '#c9ff3d', display: 'grid', placeItems: 'center',
        fontSize: 24, fontWeight: 800, color: '#0a0a0a',
      }}>B</div>
      <h1 style={{margin: 0, fontSize: 32, letterSpacing: '-0.03em'}}>404</h1>
      <p style={{margin: 0, color: '#8a8f99'}}>Page not found.</p>
      <a href="/" style={{
        marginTop: 8, padding: '12px 24px', borderRadius: 999,
        background: '#c9ff3d', color: '#0a0a0a', fontWeight: 600,
        textDecoration: 'none', fontSize: 14,
      }}>Go home</a>
    </div>
  )
}
