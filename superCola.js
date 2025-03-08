"use strict";

// function show() {
//   gsap.registerPlugin(ScrollTrigger);
//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".scroller"),
//     smooth: true,
//   });
//   locoScroll.on("scroll", ScrollTrigger.update);
//   ScrollTrigger.scrollerProxy(".scroller", {
//     scrollTop(value) {
//       return arguments.length
//         ? locoScroll.scrollTo(value, 0, 0)
//         : locoScroll.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         top: 0,
//         left: 0,
//         width: window.innerWidth,
//         height: window.innerHeight,
//       };
//     },
//     pinType: document.querySelector(".scroller").style.transform
//       ? "transform"
//       : "fixed",
//   });

//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//   ScrollTrigger.refresh();
// }

// show();

//values

gsap.registerPlugin(ScrollTrigger);

let leftInit = parseFloat(
  getComputedStyle(document.querySelector(".hero-image")).getPropertyValue(
    "left"
  )
);

let infoContainerWidth = parseFloat(
  getComputedStyle(
    document.querySelector(".info-container--1")
  ).getPropertyValue("width")
);

//preloader
let timeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 2,
  defaults: { duration: 3, ease: "power1.inOut" },
});

timeline.to(
  ".Path_animation #path-s",
  { strokeDasharray: `1391.8944091796875 0` },
  "<"
);
timeline.to(
  ".Path_animation #path-up",
  { strokeDasharray: `1436.89794921875 0` },
  "<"
);
timeline.to(
  ".Path_animation #path-er",
  { strokeDasharray: `1437.636474609375 0` },
  "<"
);
timeline.to(
  ".Path_animation #path-co",
  { strokeDasharray: `1295.734375 0` },
  "<"
);
timeline.to(
  ".Path_animation #path-la",
  { strokeDasharray: `1136.72802734375 0` },
  "<"
);
timeline.to(
  ".Path_animation #path-s ,.Path_animation #path-up ,.Path_animation #path-er ,.Path_animation #path-co ,.Path_animation #path-la",
  { fill: `white`, duration: 2 },
  ">"
);

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
});

//media queries setup
const mobileQuery = window.matchMedia("(max-width: 500px)");
const tabletQuery = window.matchMedia(
  "(min-width: 500px) and (max-width: 800px)"
);
const desktopQuery = window.matchMedia("(min-width: 800px)");

function getScaleValue() {
  if (mobileQuery.matches) {
    return 2.5;
  } else {
    return 5;
  }
}

//scrolling animations

ScrollTrigger.create({
  trigger: "body",
  pin: ".navbar",
  start: "top top",
  // scroller: ".scroller",
  end: "bottom bottom",
  scrub: true,
});

ScrollTrigger.create({
  trigger: ".information",
  pin: ".hero",
  start: "1% bottom",
  // scroller: ".scroller",
  end: "top 40%",
  scrub: true,

  onUpdate: (self) => {
    let progress = self.progress;
    let clipPath = `polygon(0% ${50 + 50 * progress}%, 100% ${
      100 - 100 * progress
    }%, 100% 100%, 0% 100%)`;

    gsap.to(".hero-wrapper", {
      clipPath: clipPath,
    });
  },
});

// ScrollTrigger.create({
//   trigger: ".information",
//   pin: ".hero-image",
//   start: "top bottom",
//   end: "top top",
//   scroller: ".scroller",
//   scrub: true,
// });

//tweens

//moving logo and can

let t1 = gsap.timeline();

//moving logo

function animateBox() {
  t1.to(".moving__logo , .moving__logo-duplicate", {
    rotation: 90,
    delay: 0.3,
    duration: 0.5,
  });

  t1.to(".moving__logo , .moving__logo-duplicate", {
    top: `50%`,
    duration: 1,
    scale: getScaleValue(),
  });
}

animateBox();

//first appearance of wrapper

t1.to(
  ".hero-wrapper",
  {
    clipPath: `polygon(0% 50%, 100% 100%, 100% 100%, 0% 100%)`,
    duration: 1,
  },
  ">-1"
);

//the image appearance

t1.to(
  ".hero-image img",
  {
    scale: 1,
    opacity: 1,
    ease: "expoScale",
    duration: 1,
  },
  ">"
);

mobileQuery.addEventListener("change", animateBox);
tabletQuery.addEventListener("change", animateBox);
desktopQuery.addEventListener("change", animateBox);
