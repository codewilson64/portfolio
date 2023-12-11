const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav ul");
const emailButton = document.querySelector("#email-btn");
const darkButton = document.getElementById("dark-btn");

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

// Dark mode
darkButton.onclick = function () {
  darkButton.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkButton.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkButton.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
