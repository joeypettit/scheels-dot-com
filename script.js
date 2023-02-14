// global variables
let defaultValueOne = "SCHEELS";
let defaultValueTwo = ".COM";
let currentValueOne = defaultValueOne;
let currentValueTwo = defaultValueTwo;
let startingNumber = 1;
let endingNumber = 100;
let listArray = [];

// select needed DOM nodes
const ul = document.querySelector("#list");
const displayFormButton = document.querySelector(".display-form-button");
const overlay = document.querySelector("#overlay");
const accordion = document.querySelector("#accordion");
const multipleOfThreeIn = document.querySelector("#multiple-3-input");
const multipleOfFiveIn = document.querySelector("#multiple-5-input");
const editForm = document.querySelector("#edit-form");

// prepopulate form with default values
multipleOfThreeIn.value = defaultValueOne;
multipleOfFiveIn.value = defaultValueTwo;

// create list and append to DOM
generateNumberedArray();
appendList();

// function to generate the numbered list with added values from the form
function generateNumberedArray() {
  // grab current values from Form element
  let currentValueOne = multipleOfThreeIn.value;
  let currentValueTwo = multipleOfFiveIn.value;

  // clear global array
  listArray = [];

  for (let i = startingNumber; i <= endingNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      listArray.push(String(currentValueOne + currentValueTwo));
    } else if (i % 3 === 0) {
      listArray.push(String(currentValueOne));
    } else if (i % 5 === 0) {
      listArray.push(String(currentValueTwo));
    } else {
      listArray.push(String(i));
    }
  }
}

// function which appends the list to the DOM
function appendList() {
  // clear list
  ul.replaceChildren();
  for (let i = 0; i < listArray.length; i++) {
    const newLi = document.createElement("li");
    if (listArray[i] === String(currentValueOne + currentValueTwo)) {
      newLi.classList.add("li-has-both-values");
    } else if (i % 2 === 0) {
      newLi.classList.add("li-even");
    } else {
      newLi.classList.add("li-odd");
    }
    const liText = document.createElement("div");
    liText.innerText = listArray[i];
    newLi.append(liText);
    ul.append(newLi);
  }
}

// accordion display toggle click listener
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

// click listener for UPDATE button
editForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("okay");
  currentValueOne = multipleOfThreeIn.value;
  currentValueTwo = multipleOfFiveIn.value;
  generateNumberedArray();
  appendList();
});
