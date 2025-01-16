// List of Urdu Poetries
const poetries = [
  "یہ دنیا یہ محفل میرے کام کی نہیں\nکچھ بھی نہیں یہاں تیرے نام کے بغیر",
  "دعا کے ساتھ دعا کا اثر بھی رہتا ہے\nعجب چراغ ہے جو بے خطر بھی رہتا ہے",
  "بچھڑنے والے میں کیسے تجھے بھلا دوں گا\nکہ تجھ سے بچھڑ کر میں خود کو بھی کھو دوں گا"
];

// Shuffle Poetries
function shufflePoetries() {
  return poetries.sort(() => Math.random() - 0.5);
}

// Render Poetries
function renderPoetries() {
  const poetryBox = document.getElementById("poetry-box");
  poetryBox.innerHTML = ""; // Clear previous content

  shufflePoetries().forEach((poetry) => {
    const poetryDiv = document.createElement("div");
    poetryDiv.className = "poetry";

    const poetryText = document.createElement("p");
    poetryText.textContent = poetry;

    const actionsDiv = document.createElement("div");
    actionsDiv.className = "actions";

    const copyButton = document.createElement("button");
    copyButton.textContent = "Copy";
    copyButton.onclick = () => {
      navigator.clipboard.writeText(poetry);
      alert("شاعری کلپ بورڈ پر کاپی ہو گئی ہے!");
    };

    const shareButton = document.createElement("button");
    shareButton.className = "whatsapp";
    shareButton.textContent = "Share";
    shareButton.onclick = () => {
      const whatsappURL = `https://wa.me/?text=${encodeURIComponent(poetry)}`;
      window.open(whatsappURL, "_blank");
    };

    actionsDiv.appendChild(copyButton);
    actionsDiv.appendChild(shareButton);

    poetryDiv.appendChild(poetryText);
    poetryDiv.appendChild(actionsDiv);

    poetryBox.appendChild(poetryDiv);
  });
}

// Load Poetries on Page Load
window.addEventListener("load", renderPoetries);
