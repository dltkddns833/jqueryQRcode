var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://sosdev3.scout.co.kr",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});