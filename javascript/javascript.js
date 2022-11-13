const display = document.querySelector("#display");
const results = document.querySelector("#results");
const input = document.querySelector("#input");
const operatorButtons = document.querySelectorAll(".operator");
const numButtons = document.querySelectorAll(".num");
const equalsButton = document.querySelector("#buttonEquals");
const buttonClear = document.querySelector("#buttonClear");
const buttonDeci = document.querySelector("#buttonPeriod");
const buttonDel = document.querySelector("#buttonDelete");

let displayValue = null;
let operator;
let tempValue = "";

//object that will hold the input and out from calculator
const computeValues = {
    first: null,
    second: null,
    answer: null,
};
 
//function that executes the operation, inputs: first value, second value, operator function
function operate(a, b, c) {
    //temp---------------
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
    console.log(`answer: ${c(a, b)}`)

    return c(a, b);
}

//function for additional operator
function add(a, b) {
    return fixNumber(a + b);
}

//function for subtraction operator
function subtract(a, b) {
    return fixNumber(a - b);
}

//function for multiplication operator
function multiply(a, b) {
    return fixNumber(a * b);
}

//function for division operator
function divide(a, b) {
    return fixNumber(a / b);
}

//function to fix the .000000000000X issues
function fixNumber(a) {
    return Math.round(a*1e12)/1e12
}

//function that adds value of the answer to the results DOM
function displayAnswer(displayValue) {
    if (isNaN(displayValue)) {
        value = "Error";
    } else {
        results.textContent = parseFloat(displayValue).toLocaleString();
        display.appendChild(results);
    }
}

//function that adds value of input number to the results DOM
function displayNum(value) {
    if (isNaN(value)) {
        value = "Error";
    } else {
        results.textContent = parseFloat(value).toLocaleString();
        display.appendChild(results);
    }
}

//function that makes the number buttons (0-9) function
numButtons.forEach((nButton) => {
    nButton.addEventListener("click", () => {
        //this adds the numbers from button press to a string to make it behave like a calculator
        tempValue += nButton.textContent;

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

        //this tests for doing multiple operator calculation before pressing =. (5+3-5*7 than press equals). Places before the operator function because one is already pressed, putting this below the operator function will cause it to replace
        if (tempValue != "" && computeValues.first) {
            calculateAnswer();
        }

        //deciding what operator function should be used
        operator = getOperator(button.id);

        //moves the current values on display to "first" value of object computeValues. If statement helps for when multiple operators are pressed.
        if (tempValue && computeValues.first == null) {
            computeValues.first = tempValue;

            //empties the temp string to be ready for next value input
            tempValue = "";
        }
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
equalsButton.addEventListener("click", () => {
    calculateAnswer();
});

//function that has the answer calculation logic. It inputs the current temp value into second value, inputs computeValues object into the operator function, and then outputs the results
function calculateAnswer() {
    if (computeValues.first && tempValue) {
        //when you press the equals button, the current temp value is moved to the second value
        computeValues.second = tempValue;

        //turn the first and second values into integers and sends the numbers and the operator function to the operator function
        computeValues.answer = operate(parseFloat(computeValues.first), parseFloat(computeValues.second), operator);
        displayAnswer(computeValues.answer);

        //moves the answer value to first value to get ready for the next calculation
        computeValues.first = computeValues.answer;
        computeValues.answer = 0;
        tempValue = "";
    } else {
        computeValues.first = tempValue;
        computeValues.answer = computeValues.first;
        tempValue = "";
    }

}


//adds function to decimal button
buttonDeci.addEventListener("click", () => {
    if (tempValue[tempValue.length-1] != ".") {
        tempValue += ".";
    } else if (tempValue == NaN) {
        displayNum("0.");
    }
    displayNum(tempValue);
});


//function for resetting the calculator. flushes all values and clears screen
function reset() {
    computeValues.first = null;
    computeValues.second = null;
    computeValues.answer = null;
    tempValue = "";
    displayValue = null;
    cleanScreen();
}


//adding function to the reset button
buttonClear.addEventListener("click", () => {
    reset();
});

//adding function of the delete button
buttonDel.addEventListener("click", () => {
    tempValue = tempValue.slice(0, -1);
    displayNum(tempValue);
});

// console.log(operate(computeValues.first, computeValues.second, add))





//BUG LIST
//pressing . doesn't show . immediately
//can't show .0