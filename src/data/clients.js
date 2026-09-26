function skinArm(tone, shadow) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <defs>
        <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${tone}"/>
          <stop offset="100%" stop-color="${shadow}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="400" fill="#161016"/>
      <path d="M 220 30 Q 180 30 175 80 L 165 300 Q 160 350 220 360 L 340 360 Q 400 350 395 300 L 385 80 Q 380 30 340 30 Z" fill="url(#skin)"/>
      <ellipse cx="250" cy="70" rx="40" ry="15" fill="white" opacity="0.08"/>
    </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

export const clients = [
  { id: 1, name: 'Marco', request: '"Something that says freedom. Surprise me."', image: skinArm('#d9a066', '#a8703f') },
  { id: 2, name: 'Priya', request: '"Cover up my ex\'s name. Make it beautiful."', image: skinArm('#e8b88a', '#b8825a') },
  { id: 3, name: 'Dex', request: '"My lucky number, big and bold."', image: skinArm('#c68863', '#925f3f') },
  { id: 4, name: 'Sunny', request: '"A flash-sheet classic, whatever you\'ve got."', image: skinArm('#f0c9a0', '#c49868') },
];