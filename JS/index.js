document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // get the phone number
    const phoneNumber = document.getElementById("phone-number");
    console.log(phoneNumber.value);
    // get the pin code

    const pinCode = document.getElementById("button-pin");
    console.log(pinCode.value);

    // get the condition

    if (phoneNumber.value === "5" && pinCode.value === "123") {
      console.log("you can log in");
      window.location.href = "/home.html";
    } else {
      alert("please provide right pin");
    }
  });
