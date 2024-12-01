// add money system is here
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountInput = document.getElementById("amount-input").value;
    console.log(amountInput);

    // amount pin
    const amountPin = document.getElementById("amount-pin").value;
    console.log(amountPin);

    // adding current money
    const balanceMoney = document.getElementById("current-money").innerText;
    console.log("balance", balanceMoney);

    const currentMoney = Number(balanceMoney) + Number(amountInput);
    console.log(currentMoney);

    // show current balance inside the display
    document.getElementById("current-money").innerText = currentMoney;
    // chech the pin number and verify the pin
    if (amountPin === "1234") {
      console.log("succesfully added money");
    } else {
      alert("please try again to adding money");
    }
  });

//   cash out system is here
