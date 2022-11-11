const display = document.querySelector("#display");
const results = document.querySelector("#results");
const input = document.querySelector("#input");
const operatorButtons = document.querySelectorAll(".operator");

let valueOne = "";
let valueTwo = "";
let tempValue = "";
let operatorFunction;
let operatorSymbol = "";

function getValue() {
    for (let i = 0; i <= 9; i++) {
        const buttons = document.querySelector(`#button${i}`);
        buttons.addEventListener("click", () => {
            tempValue += i;
            displayOutput(parseInt(tempValue));
            return parseInt(tempValue);
        });
    }
}

function displayOutput(value) {
    results.textContent = value;
    display.appendChild(results);
}

function getFirstValue() {
    let output = getValue();

}

// getFirstValue()

function buttonAdd(a , b) {
    return a + b;
}

function operatorCheck() {
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.id);
            return button.id;
        })
    });
}

operatorCheck();

// console.log(output);


// results.textContent(output);
