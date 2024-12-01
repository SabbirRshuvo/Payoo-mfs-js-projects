// add money btn
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountInput = document.getElementById("amount-input");
    console.log(amountInput.value);

    // amount pin
    const amountPin = document.getElementById("amount-pin");
    console.log(amountPin.value);
  });
