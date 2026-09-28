// Open home.html when the Login button is clicked
document.getElementById("loginBtn").addEventListener("click", function () {
  window.location.href = "home.html";
});

// Pressing Enter inside the form does the same
document.getElementById("loginForm").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    window.location.href = "home.html";
  }
});

// Secure Auto-Login also goes to the home page
document.getElementById("autoLoginBtn").addEventListener("click", function () {
  window.location.href = "home.html";
});
