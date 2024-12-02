document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // cash out amount set in the display
    const previousAmout = document.getElementById("cash-out-amount").value;
    console.log(previousAmout);

    // set the pin number into the display
    const cashoutPin = document.getElementById("cash-out-pin").value;
    console.log(cashoutPin);

    // set the real cash out system in the display
    const previousBalance = document.getElementById("current-money").innerText;
    console.log(previousBalance);

    const currentBalance = previousBalance - previousAmout;
    console.log(currentBalance);

    // set the current amout after cash out
    document.getElementById("current-money").innerText = currentBalance;
    // set the condition with the pin
    if (cashoutPin === "1234") {
      console.log("succesfully cash out");
    } else {
      alert("please provide the pin");
    }

    // empty string
    document.getElementById("cash-out-amount").value = "";
    document.getElementById("cash-out-pin").value = "";
  });
