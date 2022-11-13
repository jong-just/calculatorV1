const display = document.querySelector("#display");
const results = document.querySelector("#results");
const input = document.querySelector("#input");
const operatorButtons = document.querySelectorAll(".operator");
const numButtons = document.querySelectorAll(".num");
const equalsButton = document.querySelector("#buttonEquals");
const buttonClear = document.querySelector("#buttonClear");

let displayValue = 0;
let operator;
let tempValue = "";

//object that will hold the input and out from calculator
const computeValues = {
    first: 0,
    second: 0,
    answer: 0,
};
 
//function that executes the operation, inputs: first value, second value, operator function
function operate(a, b, c) {
    //temp---------------
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`answer: ${c(a, b)}`)

    return c(a, b);
}

//function for additional operator
function add(a, b) {
    return a + b;
}

//function for subtraction operator
function subtract(a, b) {
    return a - b;
}

//function for multiplication operator
function multiply(a, b) {
    return a * b;
}

//function for division operator
function divide(a, b) {
    return a / b;
}

//function that adds value of the answer to the results DOM
function displayAnswer(displayValue) {
    results.textContent = displayValue;
    display.appendChild(results);
}

//function that adds value of input number to the results DOM
function displayNum(value) {
    results.textContent = value;
    display.appendChild(results);
}


//function that makes the number buttons (0-9) function
numButtons.forEach((nbutton) => {
    nbutton.addEventListener("click", () => {
        //this adds the numbers from button press to a string to make it behave like a calculator
        tempValue += nbutton.textContent;

        console.log(tempValue); //temp--------------
        displayNum(tempValue);
    });
});

//function that makes the operator buttons function
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id); //temp--------------
        //this blanks out the display after the operator is pressed
        cleanScreen();

        //deciding what operator function should be used
        operator = getOperator(button.id);

        //moves the current values on display to "first" value of object computeValues
        computeValues.first = tempValue;

        //empties the temp string to be ready for next value input
        tempValue = "";
    })
});

//function from clearing the screen
function cleanScreen() {
    results.textContent = "";
    display.appendChild(results);
}

//this determines what the operator does, using the id of the operator button
function getOperator(value) {
    if (value == "buttonAdd") return add;
    if (value == "buttonMinus") return subtract;
    if (value == "buttonMulti") return multiply;
    if (value == "buttonDivide") return divide;
}

//adds function to the equals button
buttonEquals.addEventListener("click", () => {
    //when you press the equals button, the current temp value is moved to the second value
    computeValues.second = tempValue;

    //turn the first and second values into integers and sends the numbers and the operator function to the operator function
    computeValues.answer = operate(parseFloat(computeValues.first), parseFloat(computeValues.second), operator);
    displayAnswer(computeValues.answer);

    //moves the answer value to first value to get ready for the next calculation
    tempValue = computeValues.answer;
    computeValues.answer = 0;
});

//function for resetting the calculator. flushes all values and clears screen
function reset() {
    computeValues.first = 0;
    computeValues.second = 0;
    computeValues.answer = 0;
    tempValue = "";
    displayValue = 0;
    cleanScreen();
    console.log("test");
}


//adding function to the reset button
buttonClear.addEventListener("click", () => {
    reset();
});


// console.log(operate(computeValues.first, computeValues.second, add))