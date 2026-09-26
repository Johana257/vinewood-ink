export default function PortfolioScreen({ portfolio, onRestart }) {
  const totalTips = portfolio.reduce((sum, p) => sum + p.tip, 0);

  return (
    <div className="screen">
      <h2>Shift Complete</h2>
      <p>Total earned: ${totalTips}</p>
      <div className="portfolio-grid">
        {portfolio.map((p, i) => (
          <div key={i} className="portfolio-item">
            <img src={p.image} alt={p.client.name} />
            <p>{p.client.name} — ${p.tip}</p>
          </div>
        ))}
      </div>
      <button onClick={onRestart}>New Shift</button>
    </div>
  );
}