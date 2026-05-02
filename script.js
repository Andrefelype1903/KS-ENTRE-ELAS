console.log("tudo ok");

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

//draws all elements with the "draw-me" class applied
gsap.from(".draw-me", {
  duration: 4,
  drawSVG: 0,
  scrollTrigger: {
    trigger: ".logo-rosto",
    markers: false,
    start: "30% 50%",
  },
});
