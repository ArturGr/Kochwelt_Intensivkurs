function calculate() {
    let portionsInput = document.getElementById("portions");
    const amountElements = document.querySelectorAll(".amount_value");

    let portions = parseFloat(portionsInput.value);

    if (isNaN(portions) || portions < 1) {
        portions = 1;
    } else if (portions > 12) {
        portions = 12;
    }

    if (portionsInput.value.indexOf(".") !== -1 || portionsInput.value.indexOf(",") !== -1) {
        portions = parseInt(portions);
    }

    portionsInput.value = portions;

    for (let i = 0; i < amountElements.length; i++) {
        const element = amountElements[i];
        let baseValue = parseFloat(element.getAttribute("data-base"));

        if (isNaN(baseValue)) {
            baseValue = parseFloat(element.textContent);
            element.setAttribute("data-base", baseValue);
        }

        const newValue = baseValue * portions;


        if (newValue % 1 === 0) {
            element.textContent = newValue;
        } else {
            element.textContent = newValue.toFixed(1);
        }
    }
}
