document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button clicked");

    // step two

    const phoneNumber = document.getElementById("phone-number");
    console.log(phoneNumber);
  });
