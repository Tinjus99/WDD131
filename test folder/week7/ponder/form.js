let paymentMethod = document.querySelector("paymentMethod");

paymentMethod.addEventListener("change", changepaymentMethod);

 let paypal = document.querySelector("paypalUsernameContainer");
 let card = document.querySelector("#creditCardContainer")


function changepaymentMethod() {
    let paymentMethod = paymentMethod.value;
    if (paymentMethod == "creditCard") {
        card.classList.remove("hide");
        paypal.classList.add("hide");
        card.required = true;
        paypal.required = false;
    }
    if (paymentMethod == "paypal") {
        paypal.classList.remove("hide");
        card.classList.add("hide");
        card.required = false;
        paypal.required = true;
    }
}