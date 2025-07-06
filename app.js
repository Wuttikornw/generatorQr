function generateTreeId() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `tree_${timestamp}_${random}`;
}

function generateQR() {
  const treeId = generateTreeId();
  const canvas = document.getElementById('qrCanvas');
  QRCode.toCanvas(canvas, treeId, () => {
    const img = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.href = img;
    link.download = `${treeId}.png`;
    link.click();
  });
}
