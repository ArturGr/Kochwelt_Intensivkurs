/* Script for Modul 6 - Gruppenarbeit Kochwelt */

/* Function to toggle responsive-menu */
function toggleMenu(){
    const menu = document.getElementById("mainMenu");
    const burger = document.getElementById("burgerMenu");

    burger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

/* Function to send email via contct-form */
function sendMail(event){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xgvndnzo", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

function menuCalc(){
    // get number of portions to calculate with
    const portions = document.getElementById("portions").value;
    // get all values within the table, parse them into numbers/integer (if required) and store them within an array
    const amount = Array.from(document.querySelectorAll(".amount span")).map(el => parseInt(textContent));

    console.log(portions, amount);
};



/* Call different functions after DOM was loaded */
document.addEventListener("DOMContentLoaded", () => {
    // toggle responsive Menu
    toggleMenu();
    menuCalc();
});