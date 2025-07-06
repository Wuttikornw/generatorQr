function generateTreeId() {
  const ts = Date.now();
  const rnd = Math.floor(Math.random() * 10000);
  return `tree_${ts}_${rnd}`;
}

function generateQR() {
  const treeId = generateTreeId();
  const canvas = document.getElementById('qrCanvas');
  QRCode.toCanvas(canvas, treeId, () => {
    const img = canvas.toDataURL("image/png");
    const a = document.createElement('a');
    a.href = img;
    a.download = `${treeId}.png`;
    a.click();
  });
}
