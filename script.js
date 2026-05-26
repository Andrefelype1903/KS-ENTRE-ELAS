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

// pre-loader ↓

const animaPagina = () => {
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
    opacity: 0,
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

  gsap.from("#separador-1 .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: ".titulo-secao4",
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
      start: "top 50%",
    },
  });

  gsap.from("#separador-2 .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: "#separador-2",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from("#destaque-2 path", {
    drawSVG: 0,
    duration: 2,

    scrollTrigger: {
      trigger: "#destaque-2",
      markers: false,
      start: "top 50%",
    },
  });

  gsap.from("#separador-3 .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: "#separador-3",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from("#destaque-3 path", {
    drawSVG: 0,
    duration: 2,

    scrollTrigger: {
      trigger: "#destaque-3",
      markers: false,
      start: "top 50%",
    },
  });

  gsap.from("#separador-4 .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: "#separador-4",
      markers: false,
      start: "top 80%",
    },
  });

  let cuide = SplitText.create(".cuide h2", {
    type: "lines, words, chars",
    mask: "lines",
  });

  gsap.from(cuide.chars, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".cuide h2",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  // serviços ↑

  // sobre nós ↓

  let sobreNosH3 = SplitText.create(".sobre-nos h3", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let sobreNosH2 = SplitText.create(".sobre-nos h2", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let sobreNosP = SplitText.create(".sobre-nos p", {
    type: "lines, words, chars",
    mask: "lines",
  });

  gsap.from(sobreNosH3.chars, {
    x: 10,
    opacity: 0,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".sobre-nos h3",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(sobreNosH2.chars, {
    x: 10,
    opacity: 0,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".sobre-nos h3",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(sobreNosP.chars, {
    // x: 20,
    opacity: 0,
    stagger: 1,

    scrollTrigger: {
      trigger: ".sobre-nos p",
      markers: false,
      start: "top 95%",
      end: "bottom 60%",
      scrub: 1,
    },
  });

  // sobre nós ↑

  // especialistas ↓

  gsap.from(".titulo-secao6 h3", {
    y: -20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".titulo-secao6",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from(".titulo-secao6 h2", {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".titulo-secao6",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from(".titulo-secao6 .separadores .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: ".titulo-secao6",
      markers: false,
      start: "top 70%",
    },
  });

  let shirlainiH3 = SplitText.create(".shirlaini h3", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let shirlainiH2 = SplitText.create(".shirlaini h2", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let shirlainiP = SplitText.create(".shirlaini p", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let kellyH3 = SplitText.create(".kelly h3", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let kellyH2 = SplitText.create(".kelly h2", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let kellyP = SplitText.create(".kelly p", {
    type: "lines, words, chars",
    mask: "lines",
  });

  gsap.from(shirlainiH3.chars, {
    x: 10,
    opacity: 0,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".shirlaini h3",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(shirlainiH2.chars, {
    x: 10,
    opacity: 0,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".shirlaini h2",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(shirlainiP.chars, {
    // x: 20,
    opacity: 0,
    stagger: 1,

    scrollTrigger: {
      trigger: ".shirlaini p",
      markers: false,
      start: "top 95%",
      end: "bottom 60%",
      scrub: 2,
    },
  });

  gsap.from(kellyH3.chars, {
    x: 10,
    opacity: 0,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".kelly h3",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(kellyH2.chars, {
    x: 10,
    opacity: 0,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".kelly h2",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(kellyP.chars, {
    // x: 20,
    opacity: 0,
    stagger: 1,

    scrollTrigger: {
      trigger: ".kelly p",
      markers: false,
      start: "top 95%",
      end: "bottom 60%",
      scrub: 2,
    },
  });

  let textoEspecialistasH2 = SplitText.create(".texto-especialistas h2", {
    type: "lines, words, chars",
    mask: "lines",
  });

  gsap.from(textoEspecialistasH2.chars, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".texto-especialistas h2",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(".texto-especialistas .separadores .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: ".texto-especialistas .separadores",
      markers: false,
      start: "top 70%",
    },
  });

  // especialistas ↑

  // depoimentos ↓

  gsap.from(".titulo-depoimentos h3", {
    y: -20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".titulo-depoimentos",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from(".titulo-depoimentos h2", {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".titulo-depoimentos",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from(".titulo-depoimentos .separadores .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: ".titulo-depoimentos",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from(".swiper-4 svg", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",

    scrollTrigger: {
      trigger: ".swiper-4",
      markers: false,
      start: "top 90%",
      end: "bottom 70%",
    },
  });

  gsap.from(".swiper-4 blockquote", {
    opacity: 0,
    duration: 2,

    scrollTrigger: {
      trigger: ".swiper-4",
      markers: false,
      start: "top 90%",
      end: "bottom 70%",
      scrub: 1,
    },
  });

  gsap.from(".swiper-5 blockquote", {
    opacity: 0,
    duration: 2,

    scrollTrigger: {
      trigger: ".swiper-5",
      markers: false,
      start: "top 80%",
      end: "bottom 50%",
      scrub: 1,
    },
  });

  gsap.from(".swiper-5 svg", {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)",

    scrollTrigger: {
      trigger: ".swiper-5",
      markers: false,
      start: "top 80%",
    },
  });

  // depoimentos ↑

  // localização ↓

  gsap.from(".localizacao .titulo-localizacao h3", {
    y: -20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".titulo-localizacao",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from(".localizacao h2", {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".titulo-localizacao",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.from(".localizacao .separadores .draw-me", {
    duration: 4,
    drawSVG: 0,

    scrollTrigger: {
      trigger: ".titulo-localizacao",
      markers: false,
      start: "top 70%",
    },
  });

  let localizaçãoText = SplitText.create(".conteiner-localizacao h3", {
    type: "lines, words, chars",
    mask: "lines",
  });

  gsap.from(localizaçãoText.chars, {
    // x: 20,
    opacity: 0,
    stagger: 0.05,
    duration: 0.01,

    scrollTrigger: {
      trigger: ".conteiner-localizacao h3",
      markers: false,
      start: "top 70%",
    },
  });

  // localização ↑

  // agende ↓

  gsap.from(".agende path", {
    drawSVG: 0,
    duration: 5,

    scrollTrigger: {
      trigger: ".agende .logo",
      markers: false,
      start: "top 70%",
    },
  });

  gsap.to(".agende .letra-logo", {
    fill: "#FEFEFE",
    duration: 5,
    fillOpacity: 0.15,

    scrollTrigger: {
      trigger: ".agende .logo",
      markers: false,
      start: "top 70%",
    },
  });

  let textoAgendeH3 = SplitText.create(".agende h3", {
    type: "lines, words, chars",
    mask: "lines",
  });

  let textoAgendeP = SplitText.create(".agende p", {
    type: "lines, words, chars",
    mask: "lines",
  });

  gsap.from(textoAgendeH3.chars, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".agende h3",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(textoAgendeP.chars, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,

    scrollTrigger: {
      trigger: ".agende p",
      markers: false,
      start: "top 90%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  gsap.from(".institucional", {
    y: 20,
    opacity: 0,
    duration: 2,

    scrollTrigger: {
      trigger: ".institucional",
      markers: false,
      start: "top 90%",
      end: "80% 70%",
      scrub: 1,
    },
  });
};

const tl = gsap.timeline({
  onComplete() {
    animaPagina();
    gsap.to(".pre-loader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.from(".pre-loader svg", {
  opacity: 0,
  duration: 0.5,
});

tl.to(".pre-loader .letras-preLoader", {
  strokeDashoffset: 0,
  duration: 3,
});

tl.from(
  ".pre-loader .rosto-preLoader",
  {
    drawSVG: 0,
    duration: 3,
  },
  "<",
);

tl.to(".pre-loader .letras-preLoader", {
  fill: "#fefefe",
  duration: 1,
});

// pre-loader ↑
