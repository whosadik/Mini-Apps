function calculateTip(n) {
  let bill = parseFloat(document.getElementById("bill-input").value);
  let people = parseInt(document.getElementById("amount-input").value);

  if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
    alert("Please enter the bill amount and number of people");
    return;
  }

  let tipAmount = (bill * n) / people;
  let totalAmount = (bill + bill * n) / people;

  document.getElementById("tipcost-text").textContent =
    "$" + tipAmount.toFixed(2);
  document.getElementById("totalcost-text").textContent =
    "$" + totalAmount.toFixed(2);
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
const customInput = document.getElementById("tip-custom");

customInput.addEventListener(
  "input",
  debounce(function () {
    const customValue = parseFloat(this.value);
    if (!isNaN(customValue)) {
      calculateTip(customValue / 100);
    }
  }, 300)
);

const amountInput = document.getElementById("amount-input");

amountInput.addEventListener(
  "input",
  debounce(function () {
    const customValue = parseFloat(customInput.value);
    if (!isNaN(customValue)) {
      calculateTip(customValue / 100);
    }
  }, 300)
);

function resetAll() {
  document.getElementById("bill-input").value = "";
  document.getElementById("amount-input").value = "";
  document.getElementById("tip-custom").value = "";
  document.getElementById("tipcost-text").textContent = "$0.00";
  document.getElementById("totalcost-text").textContent = "$0.00";
}
