const scriptsToLoad = [
    "js/component/NavBar.js",
    "js/component/MobileNavBar.js",
    "js/component/Footer.js",
    "js/component/Project.js",
    "js/component/Experience.js",
    "js/script.js",
    "js/animation.js",
    "js/vanilla-tilt.js",
];

scriptsToLoad.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.defer = true; // Optional: preserves execution order
    document.head.appendChild(script);
});