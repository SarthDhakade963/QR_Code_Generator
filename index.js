let urlInput = document.querySelector(".url");
let qrImg = document.querySelector(".QRimg");
let genBtn = document.querySelector(".generate-btn");
let qrImgContainer = document.querySelector(".qr-img");

genBtn.addEventListener("click", getQR);

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getQR();
  }
});

function getQR() {
  const url = urlInput.value.trim();

  if (!url) {
    alert("Please enter a valid text or URL");
    return;
  }

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=230x230&data=${encodeURIComponent(
    url
  )}`;

  qrImgContainer.style.display = "block";
}
