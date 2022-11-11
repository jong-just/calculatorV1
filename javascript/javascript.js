const display = document.querySelector("#display");
const results = document.querySelector("#results");
const input = document.querySelector("#input");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#buttonEquals");
let valueOne = "";
let valueTwo = "";
let answer;
let operatorFunction;
let operatorSymbol = "";


function getValue() {
    let tempValue = "";
    for (let i = 0; i <= 9; i++) {
        const buttons = document.querySelector(`#button${i}`);
        buttons.addEventListener("click", () => {
            tempValue += i;
            displayOutput(parseInt(tempValue));
            console.log(tempValue);
            operatorButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    console.log("test");
                    return parseInt(tempValue);
                })
            });
            
        });
    }
}

function getSecondValue() {
    let tempValueTwo = "";

    for (let i = 0; i <= 9; i++) {
        const buttons = document.querySelector(`#button${i}`);
        buttons.addEventListener("click", () => {
            tempValueTwo += i;
            displayOutput(parseInt(tempValueTwo));

            return parseInt(tempValueTwo);
        });
    }
}

function calculate() {
    valueOne = getValue();
    console.log(valueOne);
    operatorFunction = operatorPress();
    valueTwo = getSecondValue();
    console.log(valueTwo);
    // outputResults(valueOne, valueTwo, operatorFunction);
}

equalsButton.addEventListener("click", () => {
    answer = allTogether(valueOne, valueTwo, buttonAdd);
    console.log(answer);
});


function displayOutput(value) {
    results.textContent = value;
    display.appendChild(results);
}



function buttonAdd(a, b) {
    return a + b;
}

function operatorPress() {
    tempValue = ""
    operatorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.id);
            results.textContent = "";
            display.appendChild(results);
            return button.id;
        })
    });

}

//FUNCTION FOR OUTPUTTING OPERATOR SYMBOL
// function getOperatorSymbol(operatorFunction) {
//     return document.getElementById(`${operatorFunction}`).textContent;
// }


// function outputResults(a, b, c) {
//     let answer = c(a, b);
// }





function allTogether(a, b, c) {
    return c(a, b);
}


calculate();



console.log(operatorSymbol);


// console.log(output);


// results.textContent(output);
