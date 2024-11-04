function openOverlay() {
    document.getElementById("overlay").style.display = "flex";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("openOverlayLink").addEventListener("click", function(event) {
    event.preventDefault();
    openOverlay();
});
