/* file: script.js */
const genBtn = document.getElementById("generate-btn");
const startingArray = document.getElementById("starting-array");
const arrayContainer = document.getElementById("array-container");
const sortBtn = document.getElementById("sort-btn");

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

function generateArray() {
  return Array.from({ length: 5 }, () => generateElement());
}

function generateContainer() {
  return document.createElement("div");
}

function fillArrContainer(container, arr) {
  container.innerHTML = "";
  arr.forEach(n => {
    const span = document.createElement("span");
    span.textContent = n;
    container.appendChild(span);
  });
}

function isOrdered(int1, int2) {
  return int1 <= int2;
}

function swapElements(arr, i) {
  if (!isOrdered(arr[i], arr[i + 1])) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    return true;
  }
  return false;
}

function highlightCurrentEls(htmlEl, index) {
  htmlEl.children[index].style.border = "1px dashed red";
  htmlEl.children[index + 1].style.border = "1px dashed red";
}

genBtn.addEventListener("click", () => {
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);
  startingArray.innerHTML = "";
  fillArrContainer(startingArray, generateArray());
})

sortBtn.addEventListener("click", () => {
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastChild);
  }

  let currentArr = [];
  Array.from(startingArray.children).forEach((child) => {
    currentArr.push(Number(child.textContent));
  });

  highlightCurrentEls(startingArray, 0);
  if (currentArr[0] > currentArr[1]) {
    swapElements(currentArr, 0);
  }

  for (let i = 0; i < currentArr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < currentArr.length - 1; j++) {
      if (i === 0 && j === 0) continue;
      let newContainer = generateContainer();
      fillArrContainer(newContainer, currentArr);
      highlightCurrentEls(newContainer, j);
      arrayContainer.appendChild(newContainer);
      if (currentArr[j] > currentArr[j + 1]) {
        swapElements(currentArr, j);
        swapped = true;
      }
    }
    if (swapped === false)
        break;
  }

  let lastContainer = generateContainer();
  lastContainer.style.border = "4px solid green";
  fillArrContainer(lastContainer, currentArr);
  arrayContainer.appendChild(lastContainer);
});
