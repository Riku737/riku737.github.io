const scriptsToLoad = [
    "js/component/NavBar.js",
    "js/component/MobileNavBar.js",
    "js/component/Tools.js",
    "js/component/Projects.js",
    "js/component/Experience.js",
    "js/component/Footer.js"
];

scriptsToLoad.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
});