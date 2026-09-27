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

// Same path used above — reused later to "cut out" just the arm from the finished edit
export const ARM_CLIP_PATH =
  'M 220 30 Q 180 30 175 80 L 165 300 Q 160 350 220 360 L 340 360 Q 400 350 395 300 L 385 80 Q 380 30 340 30 Z';

export const clients = [
  {
    id: 1,
    name: 'Marco',
    personality: 'Loud, dramatic, wants to be noticed',
    request: '"Something that says freedom. Go big. Surprise me."',
    image: skinArm('#d9a066', '#a8703f'),
    shirt: '#2b6cb0',
    idealMin: 25,
    idealMax: 55,
    quotes: {
      low: "That's it? I said SURPRISE me, not 'barely tried.'",
      good: "Now THAT'S a tattoo. People are gonna stare.",
      perfect: "YES. This is exactly the energy I wanted. You get me.",
      over: "Whoa, okay, it's a lot — but I kind of love the chaos.",
    },
  },
  {
    id: 2,
    name: 'Priya',
    personality: 'Careful, sentimental, wants subtlety',
    request: '"Cover up my ex\'s name. Make it beautiful, not loud."',
    image: skinArm('#e8b88a', '#b8825a'),
    shirt: '#9f7aea',
    idealMin: 8,
    idealMax: 25,
    quotes: {
      low: "I can still kind of see it underneath. Can we go a little further?",
      good: "Oh... it's actually really pretty. Thank you.",
      perfect: "I can't even tell there was ever anything else here. It's perfect.",
      over: "It's beautiful, but it's a lot more than I expected honestly.",
    },
  },
  {
    id: 3,
    name: 'Dex',
    personality: 'Confident, wants a bold statement piece',
    request: '"My lucky number. Big, bold, can\'t-miss-it."',
    image: skinArm('#c68863', '#925f3f'),
    shirt: '#dd6b20',
    idealMin: 20,
    idealMax: 45,
    quotes: {
      low: "That's kinda small for a lucky number, no offense.",
      good: "Solid. Clean. This'll look great in photos.",
      perfect: "This is IT. Exactly the statement piece I wanted.",
      over: "It's bold alright... maybe too bold, but hey, no regrets.",
    },
  },
  {
    id: 4,
    name: 'Sunny',
    personality: 'Easygoing, just wants a classic flash piece',
    request: '"A flash-sheet classic. Whatever you\'ve got, I trust you."',
    image: skinArm('#f0c9a0', '#c49868'),
    shirt: '#38a169',
    idealMin: 15,
    idealMax: 35,
    quotes: {
      low: "Cute! Kinda wish it had a bit more going on though.",
      good: "This is such a vibe. Exactly my style.",
      perfect: "Okay this is perfect, you really nailed the classic look.",
      over: "It's cool but way busier than the simple flash look I wanted.",
    },
  },
];