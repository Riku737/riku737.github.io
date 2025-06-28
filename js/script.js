// HIDDEN CONSOLE MESSAGE
// Suprise message for those who check the console! :D
console.log("Hi there! Thanks for checking out my website.");




// WEB NAVIGATION
// Navigation menu for desktop devices

// Menu links

const tertiary_button = document.querySelectorAll(".tertiary_button");
tertiary_button.forEach(button => {
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

navigation_links.forEach(button => {
    button.addEventListener("click", () => {
        navigation.classList.remove("active");
        navigation.classList.add("in-active");
        document.getElementById("hamburger_icon").style.display = "unset";
        document.getElementById("close_icon").style.display = "none";
        trigger = false;
    });
});

document.getElementById("home").onclick = () => {
    if (document.body.clientWidth < 1050 || document.documentElement.clientWidth < 1050) {
        navigation.classList.remove("active");
        navigation.classList.add("in-active");
        document.getElementById("hamburger_icon").style.display = "unset";
        document.getElementById("close_icon").style.display = "none";
        trigger = false;
    }
    window.scrollTo(0, 0);
};





// PROJECTS SECTION

// GitHub Co-Pilot Implementation

document.querySelectorAll('.project_link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        // Scale image thumbnails
        const img = link.querySelector('.project_image');
        if (img) {
            img.style.transform = 'scale(1.05)';
        }
        // Scale and play video highlights
        
        const video = link.querySelector('.project_image_highlight');
        if (video) {
            video.style.transform = 'scale(1.05)';
            video.play();
        }
    });
    link.addEventListener('mouseleave', () => {
        // Reset image thumbnails
        const img = link.querySelector('.project_image');
        if (img) {
            img.style.transform = 'scale(1) rotate(0deg)';
        }
        // Reset and pause video highlights
        const video = link.querySelector('.project_image_highlight');
        if (video) {
            video.style.transform = 'scale(1)';
            video.pause();
            video.load();
        }
    });
});

// Original Implementation

// document.getElementById("thumbnail_highlight_1").addEventListener("mouseenter", () => {
//     document.getElementById("highlight_cover_1").play();
//     document.getElementById("highlight_cover_1").style.transform = "scale(1.05)";
// });

// document.getElementById("thumbnail_highlight_1").addEventListener("mouseleave", () => {
//     document.getElementById("highlight_cover_1").pause();
//     document.getElementById("highlight_cover_1").load();
//     document.getElementById("highlight_cover_1").style.transform = "scale(1)";

// });

// document.getElementById("thumbnail_highlight_2").addEventListener("mouseenter", () => {
//     document.getElementById("highlight_cover_2").style.transform = "scale(1.05)";
// });

// document.getElementById("thumbnail_highlight_2").addEventListener("mouseleave", () => {
//     document.getElementById("highlight_cover_2").style.transform = "scale(1)"
// });

// document.getElementById("thumbnail_1").addEventListener("mouseover", event => {
//     document.getElementById("thumbnail_image_1").style.transform = "scale(1.05)"
// });

// document.getElementById("thumbnail_1").addEventListener("mouseout", event => {
//     document.getElementById("thumbnail_image_1").style.transform = "scale(1)"
// });

// document.getElementById("thumbnail_2").addEventListener("mouseover", event => {
//     document.getElementById("thumbnail_image_2").style.transform = "scale(1.05)"
// });

// document.getElementById("thumbnail_2").addEventListener("mouseout", event => {
//     document.getElementById("thumbnail_image_2").style.transform = "scale(1)"
// });

// document.getElementById("thumbnail_3").addEventListener("mouseover", event => {
//     document.getElementById("thumbnail_image_3").style.transform = "scale(1.05)"
// });

// document.getElementById("thumbnail_3").addEventListener("mouseout", event => {
//     document.getElementById("thumbnail_image_3").style.transform = "scale(1)"
// });

// document.getElementById("thumbnail_4").addEventListener("mouseover", event => {
//     document.getElementById("thumbnail_image_4").style.transform = "scale(1.05)"
// });

// document.getElementById("thumbnail_4").addEventListener("mouseout", event => {
//     document.getElementById("thumbnail_image_4").style.transform = "scale(1)"
// });

// Hello!