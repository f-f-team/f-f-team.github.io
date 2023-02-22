"use strict";

/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

// // MODAL

// // Get the modal
// var modal = document.getElementById("privacy");

// // Get the button that opens the modal
// var btn = document.getElementById("privacyBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
// Get the privacy modal
var privacyModal = document.getElementById("privacy");
// Get the privacy button that opens the modal
var privacyBtn = document.getElementById("privacyBtn");
// Get the <span> element that closes the privacy modal
var privacySpan = document.getElementsByClassName("close")[0];

// Get the terms modal
var termsModal = document.getElementById("terms");
// Get the terms button that opens the modal
var termsBtn = document.getElementById("termsBtn");
// Get the <span> element that closes the terms modal
var termsSpan = document.getElementsByClassName("close")[1];

// When the user clicks on the privacy button, open the privacy modal
privacyBtn.onclick = function () {
  privacyModal.style.display = "block";
};

// When the user clicks on the terms button, open the terms modal
termsBtn.onclick = function () {
  termsModal.style.display = "block";
};

// When the user clicks on <span> (x) in the privacy modal, close the privacy modal
privacySpan.onclick = function () {
  privacyModal.style.display = "none";
};

// When the user clicks on <span> (x) in the terms modal, close the terms modal
termsSpan.onclick = function () {
  termsModal.style.display = "none";
};

// When the user clicks anywhere outside of the modals, close them
window.onclick = function (event) {
  if (event.target == privacyModal) {
    privacyModal.style.display = "none";
  } else if (event.target == termsModal) {
    termsModal.style.display = "none";
  }
};
