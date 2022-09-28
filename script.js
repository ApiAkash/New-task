const togglePassword = document.querySelector(".toggle-password");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("toggle-password");
});

// prevent form submit
function myFunction() {
    alert("Account Creatred Successfully");
  }