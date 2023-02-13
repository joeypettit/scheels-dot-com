let valueOne = "SCHEELS";
let valueTwo = ".COM";
let startingNumber = 1;
let endingNumber = 100;
const numberedArray = [];

const ul = document.querySelector("#list");
console.log(ul);

function appendList() {
  for (let item of numberedArray) {
    console.log("item is", item);
    const listEl = `<li>${item}</li>`;
    ul.append(listEl);
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

generateNumberedArray();
appendList();

console.log(numberedArray);
