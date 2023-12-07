const myBtn = document.getElementById("btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message-p");
const emailLabel = document.getElementById("email-label");
const emailBox = document.getElementById("email-box");
const passLabel = document.getElementById("pass-label");
const passBox = document.getElementById("pass-box");


myBtn.addEventListener("click", function(e) {
    let domain = email.value.slice(email.value.indexOf("@"));
    console.log(domain, email.value);

    passLabel.style.color = "#2b2b2b";
    passBox.style.borderBottom = "2px solid #2b2b2b";
    message.style.display = "none";
    message.innerText = "";
    if ((domain === "@gmail.com" || domain === "@yahoo.com" || domain === "@hotmail.com" || domain === "@outlook.com")) {
        email.style.color = "#2b2b2b";
        emailLabel.style.color = "#2b2b2b";
        emailBox.style.borderBottom = "2px solid #2b2b2b";
        message.innerText = "";
        message.style.display = "none"
        if (password.value !== null && password.value !== undefined && password.value !== '') {
            console.log(email.value, password.value);
        }
        else {
            e.preventDefault();
            passLabel.style.color = "red";
            passBox.style.borderBottom = "2px solid red";
            message.style.display = "inline";
            message.innerText = "Password field cannot be left empty.";
            console.log("password error");
        }
    } else {
        e.preventDefault();
        email.style.color = "red";
        emailLabel.style.color = "red";
        emailBox.style.borderBottom = "2px solid red";
        message.innerText = "Please enter a valid email address.";
        message.style.display = "inline"
        console.log("email error");
    }
});
