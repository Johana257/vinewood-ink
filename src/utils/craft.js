export function scoreCraft(coverage, client) {
  const { idealMin, idealMax } = client;

  let band, craftScore;

  if (coverage < idealMin * 0.4) {
    band = 'low';
    craftScore = Math.round((coverage / idealMin) * 50);
  } else if (coverage < idealMin) {
    band = 'low';
    craftScore = Math.round(50 + ((coverage - idealMin * 0.4) / (idealMin * 0.6)) * 30);
  } else if (coverage <= idealMax) {
    const mid = (idealMin + idealMax) / 2;
    const distFromMid = Math.abs(coverage - mid) / ((idealMax - idealMin) / 2);
    band = distFromMid < 0.35 ? 'perfect' : 'good';
    craftScore = Math.round(100 - distFromMid * 15);
  } else {
    band = 'over';
    const overBy = coverage - idealMax;
    craftScore = Math.max(20, Math.round(80 - overBy * 1.5));
  }

  craftScore = Math.min(100, Math.max(5, craftScore));
  const tip = Math.round(10 + craftScore * 0.6);

  return { band, craftScore, tip };
}