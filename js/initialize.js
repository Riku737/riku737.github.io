const scriptsToLoad = [
    "js/NavBar.js",
    "js/MobileNavBar.js",
    "js/Footer.js",
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