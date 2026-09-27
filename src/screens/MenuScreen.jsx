import { useState } from 'react';
import { credits, aiDisclosure } from '../data/credits';

export default function MenuScreen({ onStart }) {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <div className="screen">
      <h1>Vinewood Ink</h1>
      <p className="tagline">— EST. ON THE BLOCK —</p>
      <p className="location-tag">LEONIDA STATE · VINEWOOD DISTRICT</p>
      <p>You're the newest artist at the shop. Make it count.</p>
      <button onClick={onStart}>Start Shift</button>

      <button className="credits-toggle" onClick={() => setShowCredits((s) => !s)}>
        Credits
      </button>

      {showCredits && (
        <div className="credits-box">
          {credits.map((c, i) => (
            <p key={i}>
              {c.type}: "{c.title}" by {c.author} —{' '}
              <a href={c.source} target="_blank" rel="noreferrer">source</a> ({c.license})
            </p>
          ))}
          <p className="ai-note">{aiDisclosure}</p>
        </div>
      )}
          <svg className="palm-accent" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 140 L50 60" stroke="#00e5ff" strokeWidth="3" fill="none" />
      <path d="M50 65 Q20 40 5 50" stroke="#ff2fb0" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M50 60 Q15 55 8 75" stroke="#ff2fb0" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M50 60 Q80 45 95 55" stroke="#00e5ff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M50 55 Q85 60 92 80" stroke="#00e5ff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M50 62 Q55 30 40 10" stroke="#ff2fb0" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
    </div>
  );
}