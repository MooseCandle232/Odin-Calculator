let firstNum;
let secondNum;
let operator;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, firstNum, secondNum) {
    switch (operator) {
        case "+": 
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum,secondNum);
            break;
        case "*":
            multiply(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum,secondNum);
            break;
    }
}