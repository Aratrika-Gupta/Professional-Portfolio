let words = gsap.utils.toArray("#home .row .col-lg-7"),
    tl = gsap.timeline({delay: 0.5}),
    timePerCharacter = 0.2;

words.forEach(el => {
  tl.from(el, {text: "", duration: el.innerHTML.length * timePerCharacter, ease: "none"});
});



