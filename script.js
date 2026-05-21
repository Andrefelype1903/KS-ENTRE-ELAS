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

// hero ↓

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

gsap.from(".cuidados h3", {
  y: -15,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
});

gsap.from(".cuidados p", {
  x: 15,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
});

gsap.from(".cuidados img:nth-child(1)", {
  opacity: 0,
  duration: 2,
  stagger: 0.5,
});

gsap.from(".cuidados .seta", {
  x: -15,
  opacity: 0,
  duration: 2,
  stagger: 0.5,
});

// hero ↑

// destaques ↓

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
  opacity: 0.05,
  stagger: 0.05,

  scrollTrigger: {
    trigger: ".destaques h2",
    markers: false,
    start: "20% 80%",
    end: "bottom 70%",
    scrub: 1,
  },
});

gsap.from(".numero", {
  y: -20,
  duration: 1,
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".numero",
    markers: false,
    start: "top 80%",
    end: "bottom 20%",
    scrub: 1,
  },
});

let tituloCardSplit = SplitText.create(".destaque h3", {
  type: "lines, words, chars",
  mask: "lines",
});

gsap.from(tituloCardSplit.chars, {
  y: 40,
  duration: 0.5,
  stagger: 0.05,
  opacity: 0,
  scrollTrigger: {
    trigger: ".destaque h3",
    markers: false,
    start: "top 80%",
  },
});

gsap.from(".caixa-informacoes img", {
  x: -10,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".caixa-informacoes",
    markers: false,
    start: "top 80%",
  },
});

gsap.from(".caixa-informacoes p", {
  x: 10,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".caixa-informacoes",
    markers: false,
    start: "top 80%",
  },
});

// detaques ↑

// merece ↓

gsap.from(".merece .draw-me", {
  duration: 7,
  drawSVG: 0,

  scrollTrigger: {
    trigger: ".cuidados-2",
    markers: false,
    start: "top 60%",
  },
});

let h2Merece = SplitText.create(".merece h2", {
  type: "lines, words, chars",
  mask: "lines",
});

let h3Merece = SplitText.create(".merece h3", {
  type: "lines, words, chars",
  mask: "words",
});

gsap.from(h2Merece.chars, {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.05,

  scrollTrigger: {
    trigger: ".merece h2",
    markers: false,
    start: "top 80%",
    end: "bottom 70%",
    scrub: 1,
  },
});

gsap.from(h3Merece.chars, {
  // x: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.05,

  scrollTrigger: {
    trigger: ".merece .cuidado",
    markers: false,
    start: "top 70%",
  },
});

gsap.from(".merece p", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,

  scrollTrigger: {
    trigger: ".merece .cuidado",
    markers: false,
    start: "top 70%",
  },
});

gsap.from(".merece img", {
  // x: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.8,

  scrollTrigger: {
    trigger: ".merece .cuidado",
    markers: false,
    start: "top 70%",
  },
});

// merece ↑

// serviços ↓

gsap.from(".titulo-secao4 h3", {
  y: -20,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".sevicos",
    markers: false,
    start: "top 70%",
  },
});

gsap.from(".titulo-secao4 h2", {
  y: 20,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".sevicos",
    markers: false,
    start: "top 70%",
  },
});

gsap.from(".sevicos .draw-me", {
  duration: 4,
  drawSVG: 0,

  scrollTrigger: {
    trigger: ".sevicos",
    markers: false,
    start: "top 70%",
  },
});

let sevico1 = SplitText.create("#servico-1", {
  type: "lines, words, chars",
  mask: "lines",
});

let sevico2 = SplitText.create("#servico-2", {
  type: "lines, words, chars",
  mask: "lines",
});

let sevico3 = SplitText.create("#servico-3", {
  type: "lines, words, chars",
  mask: "lines",
});

gsap.from(sevico1.chars, {
  opacity: 0,
  stagger: 0.05,

  scrollTrigger: {
    trigger: "#servico-1",
    markers: false,
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.from(sevico2.chars, {
  opacity: 0,
  stagger: 0.05,

  scrollTrigger: {
    trigger: "#servico-2",
    markers: false,
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.from(sevico3.chars, {
  opacity: 0,
  stagger: 0.05,

  scrollTrigger: {
    trigger: "#servico-3",
    markers: false,
    start: "top 80%",
    end: "bottom 60%",
    scrub: 1,
  },
});

gsap.from(".slider:nth-child(2) .destaque path", {
  drawSVG: 0,
  duration: 2,

  scrollTrigger: {
    trigger: ".slider:nth-child(2) .destaque path",
    markers: false,
    start: "top 80%",
    end: "bottom 60%",
  },
});
