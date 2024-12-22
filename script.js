// Projects section
document.getElementById("thumbnail_highlight").addEventListener("mouseenter", () => {
    document.getElementById("highlight_cover").play();
    document.getElementById("highlight_cover").style.transform = "scale(1.05)";
});

document.getElementById("thumbnail_highlight").addEventListener("mouseleave", () => {
    document.getElementById("highlight_cover").pause();
    document.getElementById("highlight_cover").load()
    document.getElementById("highlight_cover").style.transform = "scale(1)"
    
});

document.getElementById("thumbnail_1").addEventListener("mouseover", event => {
    document.getElementById("thumbnail_image_1").style.transform = "scale(1.05)"
});

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