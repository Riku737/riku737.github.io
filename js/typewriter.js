const heading = document.getElementsByClassName("hero_h1")[0];
const titles = ["Software Engineering Student", "UI/UX Designer", "Web Developer", "Communications Lead"];
const addSpeed = 100;
const removeSpeed = 100;
let titleIndex = 0;
let charIndex = 0;

window.onload = () => {
    heading.innerHTML = "I'm Riki, a "; // Permanent text
    typeWriter(); // Start the typewriter effect
};

function typeWriter() {
    if (charIndex < titles[titleIndex].length) {
        heading.innerHTML = "I'm Riki, a " + titles[titleIndex].substring(0, charIndex + 1); // Add one character at a time
        charIndex++;
        setTimeout(typeWriter, addSpeed); // Call typeWriter again after `addSpeed` milliseconds
    } else {
        setTimeout(removeText, 1500); // Delay before removing text
    }
}

function removeText() {
    if (charIndex > 0) {
        heading.innerHTML = "I'm Riki, a " + titles[titleIndex].substring(0, charIndex - 1); // Remove one character at a time
        charIndex--;
        setTimeout(removeText, removeSpeed); // Call removeText again after `removeSpeed` milliseconds
    } else {
        titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
        setTimeout(typeWriter, addSpeed); // Start typing the next title
    }
}
