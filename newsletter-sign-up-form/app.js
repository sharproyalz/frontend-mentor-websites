const errorLabel = document.getElementById("email-error-text");
const emailAddress = document.getElementById("email-address");
const subscribeButton = document.getElementById("subscribe");

subscribeButton.addEventListener("click", () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(emailAddress.value)) {
        window.location.href = "/newsletter-sign-up-form/success.html";
    } else {
        emailAddress.classList.toggle("error");
        errorLabel.classList.toggle("error");
    }
});
