const display = document.querySelector("#display");
const results = document.querySelector("#results");
const input = document.querySelector("#input");
const operatorButtons = document.querySelectorAll(".operator");
const numButtons = document.querySelectorAll(".num");
const equalsButton = document.querySelector("#buttonEquals");

let displayValue = 0;
let operator;
let tempValue = "";


const computeValues = {
    first: 0,
    second: 0,
    answer: 0,
};

function operate(a, b, c) {
    return c(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function displayAnswer(displayValue) {
    results.textContent = displayValue;
    display.appendChild(results);
}

function displayNum(value) {
    results.textContent = value;
    display.appendChild(results);
}

numButtons.forEach((nbutton) => {
    nbutton.addEventListener("click", () => {
        tempValue += nbutton.textContent;
        console.log(tempValue);
        displayNum(tempValue);
    });
});


operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        results.textContent = "";
        display.appendChild(results);
        operator = getOperator(button.id);
        computeValues.first = tempValue;
        tempValue = "";
    })
});

function getOperator(value) {
    if (value == "buttonAdd") return add;
    if (value == "buttonMinus") return subtract;
    if (value == "buttonMulti") return multiply;
    if (value == "buttonDivide") return divide;
}

buttonEquals.addEventListener("click", () => {
    computeValues.second = tempValue;
    computeValues.answer = operate(parseInt(computeValues.first), parseInt(computeValues.second), operator);
    displayAnswer(computeValues.answer);
});


// console.log(operate(computeValues.first, computeValues.second, add))