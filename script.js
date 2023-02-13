let valueOne = "SCHEELS";
let valueTwo = ".COM";
let startingNumber = 1;
let endingNumber = 100;
const numberedArray = [];

const ul = document.querySelector("#list");
const displayFormButton = document.querySelector(".display-form-button");
const overlay = document.querySelector("#overlay");
const accordion = document.querySelector("#accordion");

function appendList() {
  for (let i = 0; i < numberedArray.length; i++) {
    const newLi = document.createElement("li");
    if (numberedArray[i] === String(valueOne + valueTwo)) {
      newLi.classList.add("li-has-both-values");
    } else if (i % 2 === 0) {
      newLi.classList.add("li-even");
    } else {
      newLi.classList.add("li-odd");
    }
    const liText = document.createElement("div");
    liText.innerText = numberedArray[i];
    newLi.append(liText);
    ul.append(newLi);
  }
}

function generateNumberedArray() {
  for (let i = startingNumber; i <= endingNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      numberedArray.push(String(valueOne + valueTwo));
    } else if (i % 3 === 0) {
      numberedArray.push(String(valueOne));
    } else if (i % 5 === 0) {
      numberedArray.push(String(valueTwo));
    } else {
      numberedArray.push(String(i));
    }
  }
  console.log("numberedArray is", numberedArray);
}

// accordion display toggle
displayFormButton.addEventListener("click", function () {
  this.classList.toggle("active");
  overlay.classList.toggle("active");

  if (accordion.style.maxHeight) {
    accordion.style.maxHeight = null;
  } else {
    accordion.style.maxHeight = accordion.scrollHeight + "px";
  }
});

// click listener for overlay
overlay.addEventListener("click", function () {
  this.classList.toggle("active");
  displayFormButton.classList.toggle("active");
  accordion.style.maxHeight = null;
});

generateNumberedArray();
appendList();

console.log(numberedArray);
