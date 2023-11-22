const displayElement = document.getElementById("display-el");
const numberKeysNodeList = document.querySelectorAll(".keys");
const operatorKeysNodeList = document.querySelectorAll(".operator");
// Clear button
const clear = document.getElementById("clear");
// Equals button
const equals = document.getElementById("equals");

let displayValue;
let val1;
let val2;
let operator = [];

// Get the values from numbers clicked
numberKeysNodeList.forEach((el) => {
  el.addEventListener("click", (e) => {
    displayElement.textContent = e.target.dataset.value;

    if (displayValue) {
      val1 = displayValue;
    }

    if (!val1) {
      val1 = Number(e.target.dataset.value);
    } else if (!val2) {
      val2 = Number(e.target.dataset.value);
      console.log(val2);
    }
    // End of values logic

    console.log(`Values from the logic`, val1, val2);
  });
});

// Get the operator
operatorKeysNodeList.forEach((el) => {
  el.addEventListener("click", (e) => {
    operator.push(e.target.dataset.operator);
  });
});

// Create functions for each math operation

function add(value1, value2) {
  return value1 + value2;
}

function subtract(value1, value2) {
  return value1 - value2;
}

function multiply(value1, value2) {
  return value1 * value2;
}

function divide(value1, value2) {
  return value1 / value2;
}

function calculate(num1, num2, operator) {
  console.log(`found in function`, operator[0]);
  if (operator[0] === "+") {
    return add(num1, num2);
  } else if (operator[0] === "-") {
    return subtract(num1, num2);
  } else if (operator[0] === "*") {
    return multiply(num1, num2);
  } else if (operator[0] === "/") {
    return divide(num1, num2);
  }
}

function clearCalculator() {
  displayElement.textContent = "0";
  val1 = 0;
  val2 = 0;
  operator = [];
  displayValue = 0;
}
// Handle equals
equals.addEventListener("click", (_) => {
  displayValue = calculate(val1, val2, operator);
  displayElement.textContent = displayValue;

  // Clear them so that the logic in the assignment of values works.
  val1 = 0;
  val2 = 0;
  operator = [];
});

clear.addEventListener("click", clearCalculator);
