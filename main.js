gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.to(".wrapper", 5, { x: -window.innerWidth })
    .from(".section2 .container-fluid", 5, { opacity: 0, scale: 3 })
    .to(".wrapper", 5, { x: -window.innerWidth * 2 })
    .from(".section3 h2", 5, { opacity: 0, scale: 3, skewX: 50 })
    .to(".wrapper", 5, { x: -window.innerWidth * 3 })
    .from(".section4 h2", 5, { opacity: 0, scale: 3, skewX: -50 })

ScrollTrigger.create({
    animation: tl,
    trigger: ".wrapper",
    start: "center center",
    end: "+=4000",
    scrub: true,
    pin: true

})
