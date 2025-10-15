/* Script for Modul 6 - Gruppenarbeit Kochwelt */
console.log("js wird geladen");

/* Function to toggle responsive-menu */
function toggleMenu(){
    const menu = document.getElementById("mainMenu");
    const burger = document.getElementById("burgerMenu");

    burger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

/* Call different functions after DOM was loaded */
document.addEventListener("DOMContentLoaded", () => {
    // toggle responsive Menu
    toggleMenu();
});