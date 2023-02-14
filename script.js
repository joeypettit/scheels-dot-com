// global variables
let multiplesOfThreeValue = "SCHEELS";
let multiplesOfFiveValue = ".COM";
let startingNumber = 1;
let listLength = 99;
let listArray = [];

// select relevant DOM nodes
const domList = document.querySelector("#list");
const showFormButton = document.querySelector(".display-form-button");
const overlay = document.querySelector("#overlay");
const accordion = document.querySelector("#accordion");
const multiplesOfThreeInput = document.querySelector("#multiple-3-input");
const multiplesOfFiveInput = document.querySelector("#multiple-5-input");
const startingNumberInput = document.querySelector("#starting-number-input");
const listLengthInput = document.querySelector("#list-length-input");
const editForm = document.querySelector("#edit-form");

// prepopulate form with default values
multiplesOfThreeInput.value = multiplesOfThreeValue;
multiplesOfFiveInput.value = multiplesOfFiveValue;
startingNumberInput.value = startingNumber;
listLengthInput.value = listLength;

// create list and append to DOM
generateListArray();
appendListToDom();

// ~~~ Event Listeners ~~~

// accordion display toggle click listener
showFormButton.addEventListener("click", toggleShowForm);

// click listener for overlay
overlay.addEventListener("click", toggleShowForm);

// click listener for UPDATE button
editForm.addEventListener("submit", function (event) {
  event.preventDefault();
  updateCurrentFormValues();
  generateListArray();
  appendListToDom();
  toggleShowForm();
});

// ~~~ Functions ~~~

// function to generate the numbered list with added values from the form
function generateListArray() {
  // clear global array
  listArray = [];

  for (let i = startingNumber; i <= startingNumber + listLength; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      listArray.push(String(multiplesOfThreeValue + multiplesOfFiveValue));
    } else if (i % 3 === 0) {
      listArray.push(String(multiplesOfThreeValue));
    } else if (i % 5 === 0) {
      listArray.push(String(multiplesOfFiveValue));
    } else {
      listArray.push(String(i));
    }
  }
}

// function which appends the list to the DOM
function appendListToDom() {
  // clear list
  domList.replaceChildren();
  for (let i = 0; i < listArray.length; i++) {
    const newLiElement = document.createElement("li");
    if (listArray[i] === String(multiplesOfThreeValue + multiplesOfFiveValue)) {
      newLiElement.classList.add("li-has-both-values");
    } else if (i % 2 === 0) {
      newLiElement.classList.add("li-even");
    } else {
      newLiElement.classList.add("li-odd");
    }
    const liText = document.createElement("div");
    liText.innerText = listArray[i];
    newLiElement.append(liText);
    domList.append(newLiElement);
  }
}

function toggleShowForm() {
  overlay.classList.toggle("active");
  showFormButton.classList.toggle("active");
  if (accordion.style.maxHeight) {
    accordion.style.maxHeight = null;
  } else {
    accordion.style.maxHeight = accordion.scrollHeight + "px";
  }
}

function updateCurrentFormValues() {
  multiplesOfThreeValue = multiplesOfThreeInput.value;
  multiplesOfFiveValue = multiplesOfFiveInput.value;
  startingNumber = Number(startingNumberInput.value);
  listLength = Number(listLengthInput.value);
}
