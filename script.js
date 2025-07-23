const fontSuggestions = {
  "mobile app": "Use `Roboto 16px` for body and `Roboto Bold 20px` for headers.",
  "dashboard": "Use `Inter 14px` for tables and `Inter SemiBold 18px` for titles.",
  "landing page": "Use `Poppins 18px` for headings and `Open Sans 16px` for body.",
  "ecommerce": "Use `Lato 16px` for product descriptions and `Lato Bold 20px` for prices.",
  "standard": "Use `Arial 16px` for body and `Arial Bold 20px` for headings.",
  "portfolio website": "Use `Playfair Display 24px` for name and `Montserrat 16px` for body.",
  "blog": "Use `Merriweather 18px` for content and `Georgia Bold 22px` for titles.",
  "news website": "Use `Times New Roman 18px` for articles and `Verdana Bold 20px` for headlines.",
  "admin panel": "Use `Source Sans Pro 14px` for readability and `Source Sans Pro Semibold 16px` for emphasis.",
  "game UI": "Use `Orbitron 16px` for buttons and `Press Start 2P 14px` for scores.",
  "travel website": "Use `Raleway 20px` for headers and `Open Sans 16px` for descriptions.",
  "finance app": "Use `Nunito 14px` for general UI and `Nunito Bold 18px` for totals and balances.",
  "education platform": "Use `Work Sans 16px` for paragraphs and `Work Sans SemiBold 20px` for modules.",
  "real estate": "Use `Ubuntu 16px` for property info and `Ubuntu Bold 20px` for titles.",
  "healthcare": "Use `Assistant 16px` for patient info and `Assistant Bold 18px` for section titles.",
  "music player": "Use `Fira Sans 14px` for song lists and `Fira Sans Bold 18px` for playing track.",
  "weather app": "Use `Quicksand 16px` for forecast and `Quicksand Bold 22px` for temperature.",
  "video streaming": "Use `DM Sans 16px` for metadata and `DM Sans Medium 20px` for titles.",
  "chat app": "Use `Manrope 15px` for messages and `Manrope Bold 18px` for sender names.",
  "login page": "Use `Segoe UI 16px` for inputs and `Segoe UI Bold 20px` for the title."
};


function generatePrompt() {
  const input = document.getElementById("uiType").value.trim().toLowerCase();
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  if (fontSuggestions[input]) {
    resultText.textContent = fontSuggestions[input];
  } else {
    resultText.textContent = "Sorry, no suggestion found for this UI type.";
  }

  resultBox.classList.remove("hidden");
}
