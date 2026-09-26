function skinArm(tone) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
      <rect width="600" height="400" fill="#222"/>
      <rect x="120" y="40" width="200" height="320" rx="90" fill="${tone}"/>
    </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(svg);
}

export const clients = [
  { id: 1, name: 'Marco', request: '"Something that says freedom. Surprise me."', image: skinArm('#d9a066') },
  { id: 2, name: 'Priya', request: '"Cover up my ex\'s name. Make it beautiful."', image: skinArm('#e8b88a') },
  { id: 3, name: 'Dex', request: '"My lucky number, big and bold."', image: skinArm('#c68863') },
  { id: 4, name: 'Sunny', request: '"A flash-sheet classic, whatever you\'ve got."', image: skinArm('#f0c9a0') },
];