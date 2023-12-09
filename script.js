const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav ul");
const emailButton = document.querySelector("#email-btn");

// Toggle hamburger menu
hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// Prevent from scrolling up
emailButton.addEventListener("click", function (e) {
  e.preventDefault();
});

// Click anywhere to remove hamburger menu
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
