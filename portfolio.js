"use strict";
const pink = document.querySelector(".pink ");

// Toggle flip on click
pink.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.closest(".button")) return;
  pink.classList.toggle("active");
});
