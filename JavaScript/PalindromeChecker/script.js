const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(text) {
  const cleanText = text.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanText === cleanText.split("").reverse().join("");
}

checkBtn.addEventListener('click', () => {
  if (textInput.value === "") {
    alert("Please input a value");
    return;
  }

  result.textContent = isPalindrome(textInput.value) 
    ? `${textInput.value} is a palindrome` 
    : `${textInput.value} is not a palindrome`;
});
