// Importing the GSAP library
gsap.registerPlugin(ScrollTrigger);




// Navigation 

// gsap.from(".navigation_container", {
//    duration: 1,
//    y: "-100%",
//    ease: "bounce",
//    delay: 1,
// });



// Skills

gsap.from(".skill_information", {
    scrollTrigger: {
        trigger: ".skill_information",
        markers: true,
        scrub: true,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    y: "20%",
    opacity: 0,
});

gsap.from(".skill_content", {
    scrollTrigger: {
        trigger: ".skill_content",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    y: "20%",
    opacity: 0,
});



// Projects

gsap.from(".projects_information", {
    scrollTrigger: {
        trigger: ".projects_information",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    x: "-100%",
    opacity: 0,
})

gsap.from(".highlighted_information", {
    scrollTrigger: {
        trigger: ".highlighted_information",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    x: "100%",
    opacity: 0,
})

gsap.from(".other_projects_information", {
    scrollTrigger: {
        trigger: ".other_projects_information",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    x: "-100%",
    opacity: 0,
})

// Experience

gsap.from(".experience_information", {
    scrollTrigger: {
        trigger: ".experience_information",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    y: "20%",
    opacity: 0,
})

gsap.from(".experience_list", {
    scrollTrigger: {
        trigger: ".experience_list",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    y: "20%",
    opacity: 0,
})


// About

gsap.from(".about_information", {
    scrollTrigger: {
        trigger: ".about_information",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    x: "-100%",
    opacity: 0,
})

gsap.from(".about_content", {
    scrollTrigger: {
        trigger: ".about_content",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    x: "100%",
    opacity: 0,
})

gsap.from(".contact_banner", {
    scrollTrigger: {
        trigger: ".contact_banner",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    x: "-100%",
    opacity: 0,
})


// Footer

gsap.from(".footer_container", {
    scrollTrigger: {
        trigger: ".footer_container",
        markers: true,
        scrub: false,
        start: "top 90%",
        end: "bottom 90%",
        markers: false,
        toggleActions: "play none none reverse",
    },
    y: "20%",
    opacity: 0,
})


// Extra

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".skill_content",
//         toggleActions: "restart pause restart pause",
//     },
//     start: "top bottom center",
//     end: "bottom center",
//     scrub: true,
//     markers: false,
// });

// tl.from(".skill_content", {
//     x: "100%"
// });