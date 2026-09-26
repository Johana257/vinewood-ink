export function getReaction(coverage) {
  if (coverage < 4) {
    return { tip: 5, review: "Uh... is that it? I paid for a tattoo, not a smudge." };
  } else if (coverage < 15) {
    return { tip: 25, review: "Simple, clean, exactly what I wanted. Nice work." };
  } else if (coverage < 40) {
    return { tip: 45, review: "Now THAT'S a tattoo. You went for it and it shows." };
  } else {
    return { tip: 15, review: "It's... a lot. I said 'something,' not 'everything.'" };
  }
}