import "./style.css";

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("banner").style.display = "none";
});


// FOR THE NAV OVERLAY IN MOBILE VIEW //

const openNavButton = document.querySelector("#open-nav");
const closeNavButton = document.querySelector("#close-nav");
const nav = document.querySelector("#overlay");

openNavButton.addEventListener("click", function () {
  nav.classList.toggle("gem");
  nav.classList.add("appear");
});

closeNavButton.addEventListener("click", function () {
  nav.classList.toggle("gem");
  nav.classList.remove("appear");
  
});