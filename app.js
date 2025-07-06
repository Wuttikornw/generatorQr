function generateQR() {
  const treeId = document.getElementById('treeIdInput').value.trim();
  if (!treeId) {
    alert("กรุณาใส่ tree_id ก่อนกด Generate");
    return;
  }
  const canvas = document.getElementById('qrCanvas');

  QRCode.toCanvas(canvas, treeId, {
    width: 400, 
    margin: 1,
    color: {
      dark: "#000000",
      light: "#ffffff"
    }
  }, () => {
    const img = canvas.toDataURL("image/png");
    const a = document.createElement('a');
    a.href = img;
    a.download = `${treeId}.png`;
    a.click();
  });
}
