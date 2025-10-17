/* Script for Modul 6 - Gruppenarbeit Kochwelt */

/* Function to toggle responsive-menu */
function toggleMenu(){
    const menu = document.getElementById("mainMenu");
    const burger = document.getElementById("burgerMenu");

    burger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}


function menuCalc(){
    // get number of portions to calculate with
    const portions = document.getElementById("portions").value;
    // get all values within the table, parse them into numbers/integer (if required) and store them within an array
    const amount = Array.from(document.querySelectorAll(".amount span")).map(el => (textContent));

    console.log(portions, amount);
};



/* Call different functions after DOM was loaded */
document.addEventListener("DOMContentLoaded", () => {
    // toggle responsive Menu
    toggleMenu();
    menuCalc();
});