import { useEffect, useState } from 'react';
import { ARM_CLIP_PATH } from '../data/clients';

export default function ReactionScreen({ result, reputation, clientNumber, totalClients, onNext }) {
  const [revealed, setRevealed] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const { client, image, band, craftScore, tip, quote } = result;

  useEffect(() => {
    const t1 = setTimeout(() => setRevealed(true), 600);
    const t2 = setTimeout(() => setShowStats(true), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const bandLabel = { low: 'Underwhelming', good: 'Solid Work', perfect: 'Perfect Match', over: 'Overdone' }[band];

  return (
    <div className="screen reveal-screen">
      <p className="client-label">Client {clientNumber} of {totalClients}</p>

      <div className="reveal-stage">
        {!revealed && <div className="flash" />}
        <svg viewBox="0 0 600 500" className="reveal-svg">
          <defs>
            <clipPath id="armClip">
              <path d={ARM_CLIP_PATH} />
            </clipPath>
          </defs>
          <rect width="600" height="500" fill="#1a1030" />
          <circle cx="280" cy="90" r="55" fill="#d9a066" />
          <rect x="180" y="140" width="200" height="150" rx="30" fill={client.shirt} />
          <image
            href={image}
            x="0" y="0" width="600" height="400"
            clipPath="url(#armClip)"
            className={`reveal-arm ${revealed ? 'shown' : ''}`}
          />
        </svg>
      </div>

      <h2>{client.name}</h2>

      <div className={`stats-card ${showStats ? 'shown' : ''}`}>
        <p className="quote">"{quote}"</p>
        <div className="stat-row">
          <span>Craft Score</span>
          <div className="stat-bar"><div className="stat-fill" style={{ width: `${craftScore}%` }} /></div>
          <span>{craftScore}</span>
        </div>
        <p className="band-label">{bandLabel}</p>
        <div className="tip-line">Tip earned: <strong>${tip}</strong></div>
        <div className="rep-line">Reputation: <strong>{reputation}</strong></div>
        <button onClick={onNext}>Next Client</button>
      </div>
    </div>
  );
}