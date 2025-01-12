// HIDDEN CONSOLE MESSAGE
console.log("Hi there! Thanks for checking out my website.");




// WEB NAVIGATION

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




// HERO SECTION
const resume_button = document.querySelectorAll("#resume_button");

resume_button.forEach(button => {

    button.onclick = () => {
        window.alert("Resume coming soon!");
    }

});




// PROJECTS SECTION
document.getElementById("thumbnail_highlight_1").addEventListener("mouseenter", () => {
    document.getElementById("highlight_cover_1").play();
    document.getElementById("highlight_cover_1").style.transform = "scale(1.05)";
});

document.getElementById("thumbnail_highlight_1").addEventListener("mouseleave", () => {
    document.getElementById("highlight_cover_1").pause();
    document.getElementById("highlight_cover_1").load();
    document.getElementById("highlight_cover_1").style.transform = "scale(1)";

});

document.getElementById("thumbnail_highlight_2").onclick = () => {
    window.alert("This project is currently under development. Please check back later!");
}

document.getElementById("thumbnail_highlight_2").addEventListener("mouseenter", () => {
    document.getElementById("highlight_cover_2").style.transform = "scale(1.05)";
});

document.getElementById("thumbnail_highlight_2").addEventListener("mouseleave", () => {
    document.getElementById("highlight_cover_2").style.transform = "scale(1)"
});

document.getElementById("thumbnail_1").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_1").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_1").onclick = () => {
    window.alert("This project is currently under development. Please check back later!");
}

document.getElementById("thumbnail_1").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_1").style.transform = "scale(1)"
});

document.getElementById("thumbnail_2").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_2").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_2").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_2").style.transform = "scale(1)"
});

document.getElementById("thumbnail_3").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_3").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_3").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_3").style.transform = "scale(1)"
});

document.getElementById("thumbnail_4").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_4").style.transform = "scale(1.05)"
});

document.getElementById("thumbnail_4").addEventListener("mouseout", event => {
    document.getElementById("thumbnail_image_4").style.transform = "scale(1)"
});