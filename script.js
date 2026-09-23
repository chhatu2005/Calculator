let currentNumber = "";
let previousNumber = "";
let operator = "";

const result = document.getElementById("result");
const expression = document.getElementById("expression");


// Number input
function inputNumber(number) {

    currentNumber = currentNumber + number;

    result.textContent = currentNumber;
}


// Decimal input
function inputDecimal() {

    if (!currentNumber.includes(".")) {

        currentNumber = currentNumber + ".";

        result.textContent = currentNumber;
    }
}


// Operator input
function inputOperator(selectedOperator) {

    // Parentheses
    if (selectedOperator === "(" || selectedOperator === ")") {

        currentNumber = currentNumber + selectedOperator;

        result.textContent = currentNumber;

        return;
    }


    if (currentNumber === "") {
        return;
    }


    previousNumber = currentNumber;

    operator = selectedOperator;

    currentNumber = "";

    expression.textContent =
        previousNumber + " " + showOperator(operator);
}


// Calculate
function calculate() {

    if (
        previousNumber === "" ||
        currentNumber === "" ||
        operator === ""
    ) {
        return;
    }


    const firstNumber = Number(previousNumber);
    const secondNumber = Number(currentNumber);

    let answer;


    if (operator === "+") {

        answer = firstNumber + secondNumber;

    } else if (operator === "-") {

        answer = firstNumber - secondNumber;

    } else if (operator === "*") {

        answer = firstNumber * secondNumber;

    } else if (operator === "/") {

        if (secondNumber === 0) {

            result.textContent = "Error";

            expression.textContent =
                "Cannot divide by zero";

            resetCalculator();

            return;
        }

        answer = firstNumber / secondNumber;
    }


    // Remove floating point errors
    answer = Number(answer.toFixed(10));


    expression.textContent =
        previousNumber +
        " " +
        showOperator(operator) +
        " " +
        currentNumber +
        " =";


    result.textContent = answer;


    // Result becomes next number
    currentNumber = String(answer);

    previousNumber = "";

    operator = "";
}


// Clear
function clearCalculator() {

    currentNumber = "";

    previousNumber = "";

    operator = "";

    expression.textContent = "";

    result.textContent = "0";
}


// Reset after error
function resetCalculator() {

    currentNumber = "";

    previousNumber = "";

    operator = "";
}


// Show proper operator
function showOperator(operator) {

    if (operator === "*") {
        return "×";
    }

    if (operator === "/") {
        return "÷";
    }

    if (operator === "-") {
        return "−";
    }

    return operator;
}