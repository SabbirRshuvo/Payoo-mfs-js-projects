document
  .getElementById("cash-out-feature")
  .addEventListener("click", function () {
    // remove the hidden button
    document.getElementById("cash-out-form").classList.remove("hidden");
    // add the hidden button
    document.getElementById("add-money-form").classList.add("hidden");
  });

//   add money features

document
  .getElementById("add-money-feature")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    // add hidden

    document.getElementById("cash-out-form").classList.add("hidden");
  });
