"use strict";
const pink = document.querySelector(".pink ");

// Toggle flip on click
pink.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.closest(".button-container")) return;
  pink.classList.toggle("active");
});

//progress bar

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".green .article-container");
  observer.observe(container);
});
