const displayElement = document.getElementById("display-el");
const numberKeysNodeList = document.querySelectorAll(".keys");
const operatorKeysNodeList = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");

// Testing Stage => Things being used to test nothing more
let numbers = [];
let numberConcat;

// End of testing state

// Function clear calculator
function clearDisplay() {
  displayElement.textContent = "";
}

// Add eventlistener to clear button
clear.addEventListener("click", clearDisplay);

function handleEventListeners() {
  number = 0;
  // Lets loop over all number keys, then add an event listener to each one.
  numberKeysNodeList.forEach((k) => {
    // Add the listener to each element in the array/nodelist
    k.addEventListener("click", (e) => {
      let keyval = e.target.dataset.value;
      number += keyval;
    });
  });

  // Loop over all operator keys and add an event listener to each key.
  operatorKeysNodeList.forEach((o) => {
    // Add event listener
    o.addEventListener("click", (e) => {
      let opval = e.target.dataset.operator;
    });
  });
}
