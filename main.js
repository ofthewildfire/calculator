const displayElement = document.querySelector(".display");
let arr = 0;
let newArr = 0;
let equals = document.querySelector('[data-operator="="]');

equals.addEventListener("click", (e) => {
  newArr = arr;

  let string = newArr.split("");
  string.forEach((n, index) => {
    if (isNaN(n[index])) {
      console.log(n);
    }
  });

  switch (arr[1]) {
    case "+":
      displayElement.textContent = `${Number(arr[0]) + Number(arr[2])}`;
      break;
    case "-":
      displayElement.textContent = `${Number(arr[0]) - Number(arr[2])}`;
      break;
    case "*":
      displayElement.textContent = `${Number(arr[0]) * Number(arr[2])}`;
      break;
    case "/":
      displayElement.textContent = `${Number(arr[0]) / Number(arr[2])}`;
      break;
    default:
      break;
  }
  console.log(arr);
});

const keys = document.querySelectorAll(".keys");
keys.forEach((el) => {
  el.addEventListener("click", (e) => {
    let clickedNumber;
    let clickedOperator;
    if (e.target.dataset.value) {
      clickedNumber = Number(e.target.dataset.value);
      arr += clickedNumber;
      displayElement.textContent = arr;
    } else if (e.target.dataset.operator && e.target.dataset.operator !== "=") {
      clickedOperator = e.target.dataset.operator;
      arr += clickedOperator;
      displayElement.textContent = arr;
    } else if (e.target.dataset.clear) {
      displayElement.textContent = "Clear";
      arr = 0;
    }
  });
});
