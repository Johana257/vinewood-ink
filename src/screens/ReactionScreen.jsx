import { useEffect, useState } from 'react';
import { ARM_CLIP_PATH, REVEAL_PHOTO_URL } from '../data/clients';

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
        <img src={REVEAL_PHOTO_URL} alt="client arm" className="reveal-photo" />
        <svg viewBox="0 0 600 400" className={`ink-overlay ${revealed ? 'shown' : ''}`}>
          <defs>
            <clipPath id="inkClip">
              <path d={ARM_CLIP_PATH} />
            </clipPath>
          </defs>
          <image href={image} width="600" height="400" clipPath="url(#inkClip)" />
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