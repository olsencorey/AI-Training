const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
  let result = "";
  if (caseInsensitiveFlag.checked) {
    result += "i";
  }

  if (globalFlag.checked) {
    result += "g";
  }

  return result;
}

testButton.addEventListener('click', () => {
  const pattern = regexPattern.value;
  const testStr = stringToTest.textContent || stringToTest.value;
  const flags = getFlags();

  let regex;
  try {
    regex = new RegExp(pattern, flags);
  } catch (e) {
    testResult.textContent = "Invalid regex pattern!";
    return;
  }

  // Find if there are any matches
  const matches = testStr.match(regex);

  if (matches && matches.length > 0) {
    testResult.textContent = matches.join(", "); 
    const highlighted = testStr.replace(regex, match => `<span class="highlight">${match}</span>`);
    stringToTest.innerHTML = highlighted;
  } else {
    testResult.textContent = "no match";
    stringToTest.innerHTML = testStr;
  }
});
