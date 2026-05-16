const btnDestaques = document.querySelector(".btn-destaques");
const btnServicos = document.querySelector(".btn-servicos");
const btnEspecialistas = document.querySelector(".btn-especialistas");
const btnDepoimentos = document.querySelector(".btn-depoimentos");
const btnLocalizacao = document.querySelector(".btn-localizacao");

gsap.registerPlugin(
  DrawSVGPlugin,
  ScrollTrigger,
  ScrollSmoother,
  SplitText,
  ScrollToPlugin,
);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

btnDestaques.addEventListener("click", () => {
  gsap.to(window, {
    duration: 0.5,
    scrollTo: "#destaques",
  });
});

btnServicos.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1.8,
    scrollTo: "#servicos",
  });
});

btnEspecialistas.addEventListener("click", () => {
  gsap.to(window, {
    duration: 2.2,
    scrollTo: "#especialistas",
  });
});

btnDepoimentos.addEventListener("click", () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: "#depoimentos",
  });
});

btnLocalizacao.addEventListener("click", () => {
  gsap.to(window, {
    duration: 3,
    scrollTo: "#localizacao",
  });
});

gsap.from("header ul li", {
  y: 20,
  opacity: 0,
  stagger: 0.1,
});

gsap.from(".momento p", {
  opacity: 0,
  duration: 4,
  //   stagger: 0.02,
});

gsap.from(".hero .draw-me", {
  duration: 4,
  drawSVG: 0,
});

gsap.from(".destaques .draw-me", {
  duration: 4,
  drawSVG: 0,

  scrollTrigger: {
    trigger: ".destaques",
    markers: false,
    start: "top 80%",
  },
});

let destaqueSplit = SplitText.create(".destaques h2", {
  type: "lines, words, chars",
});

gsap.from(destaqueSplit.chars, {
  opacity: 0,
  stagger: 0.05,

  scrollTrigger: {
    trigger: ".destaques h2",
    markers: false,
    start: "20% 80%",
    end: "bottom 70%",
    // scrub: 1,
  },
});
