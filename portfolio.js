"use strict";
const pink = document.querySelector(".pink ");

// Toggle flip on click
pink.addEventListener("click", (e) => {
 
  if (e.target.closest(".button-container")) return;
  pink.classList.toggle("active");
});
