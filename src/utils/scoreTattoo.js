export function computeCoverage(originalSrc, editedDataUrl) {
  return new Promise((resolve) => {
    const imgA = new Image();
    const imgB = new Image();
    let loaded = 0;

    const compare = () => {
      loaded++;
      if (loaded < 2) return;
      const w = 200, h = 133;
      const cA = document.createElement('canvas');
      const cB = document.createElement('canvas');
      cA.width = cB.width = w;
      cA.height = cB.height = h;
      const ctxA = cA.getContext('2d');
      const ctxB = cB.getContext('2d');
      ctxA.drawImage(imgA, 0, 0, w, h);
      ctxB.drawImage(imgB, 0, 0, w, h);
      const dataA = ctxA.getImageData(0, 0, w, h).data;
      const dataB = ctxB.getImageData(0, 0, w, h).data;
      let diff = 0;
      for (let i = 0; i < dataA.length; i += 4) {
        const d = Math.abs(dataA[i] - dataB[i]) + Math.abs(dataA[i+1] - dataB[i+1]) + Math.abs(dataA[i+2] - dataB[i+2]);
        if (d > 40) diff++;
      }
      resolve(Math.round((diff / (w * h)) * 100));
    };

    imgA.onload = compare;
    imgB.onload = compare;
    imgA.src = originalSrc;
    imgB.src = editedDataUrl;
  });
}