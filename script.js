gsap.registerPlugin(ScrollTrigger)
gsap.to('.box', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport
    y: -145,
    rotation: 360,
    duration: 1.5
});

gsap.to('.button', {
    scrollTrigger: '.box', // start the animation when ".box" enters the viewport
    y: -400,
    duration: 1.5
});