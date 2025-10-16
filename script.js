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

function menuCalc(){
    const portions = document.getElementById("portions").value;
    const amount = Array.from(document.querySelectorAll(".amount")).map(el => parseInt(el.textContent));

    
    console.log(portions, amount);
};

/* Call different functions after DOM was loaded */
document.addEventListener("DOMContentLoaded", () => {
    // toggle responsive Menu
    toggleMenu();
    menuCalc();
});