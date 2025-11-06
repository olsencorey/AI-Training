const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxLen = 50;

textInput.addEventListener('input', function() {
  let value = textInput.value;

  // Trim excess characters if over the maxLen
  if (value.length > maxLen) {
    value = value.slice(0, maxLen);
    textInput.value = value; // enforce trimming
  }

  // Update character count display
  charCount.textContent = `Character Count: ${value.length}/50`;

  // Set Color to red if at max character
  if (value.length === maxLen) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }
});
