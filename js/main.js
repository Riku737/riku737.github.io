const DOMPurify = window.DOMPurify;

// HIDDEN CONSOLE MESSAGE
// Suprise message for those who check the console! :D
console.log("Hi there! Thanks for checking out my website.");

// HOME PAGE

const emailLink = DOMPurify.sanitize("mailto:hello@rikimcalear.com");

document.querySelectorAll(".linkedin_link").forEach((link) => {
	link.href = DOMPurify.sanitize("https://www.linkedin.com/in/riki-mcalear/");
});

document.querySelectorAll(".email_link").forEach((link) => {
	link.href = DOMPurify.sanitize("mailto:hello@rikimcalear.com");
});

document.querySelectorAll(".behance_link").forEach((link) => {
	link.href = DOMPurify.sanitize("https://www.behance.net/rikimcalear");
});

document.querySelectorAll(".github_link").forEach((link) => {
	link.href = DOMPurify.sanitize("https://github.com/Riku737");
});

// WEB NAVIGATION
// Navigation menu for desktop devices

// Menu links

const tertiary_button = document.querySelectorAll(".tertiary_button");
tertiary_button.forEach((button) => {
	button.addEventListener("mouseenter", () => {
		button.classList.add("active");
		button.classList.remove("in-active");
	});
	button.addEventListener("mouseout", () => {
		button.classList.remove("active");
		button.classList.add("in-active");
	});
});

// MOBILE NAVIGATION
// Navigation menu for mobile devices

// Menu button
const navigation = document.getElementById("mobile_nav");
let vTrigger = false;

function mobile_navigation() {
	if (vTrigger == false) {
		navigation.classList.add("active");
		navigation.classList.remove("in-active");
		document.getElementById("hamburger_icon").style.display = "none";
		document.getElementById("close_icon").style.display = "unset";
		vTrigger = true;
	} else {
		navigation.classList.remove("active");
		navigation.classList.add("in-active");
		document.getElementById("hamburger_icon").style.display = "unset";
		document.getElementById("close_icon").style.display = "none";
		vTrigger = false;
	}
}

// Menu links
const navigation_links = document.querySelectorAll("#menu_button");

navigation_links.forEach((button) => {
	button.addEventListener("click", () => {
		navigation.classList.remove("active");
		navigation.classList.add("in-active");
		document.getElementById("hamburger_icon").style.display = "unset";
		document.getElementById("close_icon").style.display = "none";
		trigger = false;
	});
});

document.getElementById("home").onclick = () => {
	if (
		document.body.clientWidth < 1050 ||
		document.documentElement.clientWidth < 1050
	) {
		navigation.classList.remove("active");
		navigation.classList.add("in-active");
		document.getElementById("hamburger_icon").style.display = "unset";
		document.getElementById("close_icon").style.display = "none";
		trigger = false;
	}
	window.scrollTo(0, 0);
};