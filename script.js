let valueOne = "SCHEELS";
let valueTwo = ".COM";
let startingNumber = 1;
let endingNumber = 100;
const numberedArray = [];

const ul = document.querySelector("#list");
console.log(ul);

function appendList() {
  for (let i = 0; i < numberedArray.length; i++) {
    const newLi = document.createElement("li");
    if (i % 2 === 0) {
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
      numberedArray.push(String(valueOne) + String(valueTwo));
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
const displayFormButton = document.querySelector(".display-form-button");
displayFormButton.addEventListener("click", function () {
  this.classList.toggle("active");
});

generateNumberedArray();
appendList();

console.log(numberedArray);
