let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue === '') return;
    if (currentOperation !== null) calculateResult();
    firstOperand = displayValue;
    currentOperation = operation;
    displayValue = '';
}

function calculateResult() {
    if (currentOperation === null || displayValue === '') return;
    secondOperand = displayValue;
    displayValue = operate(firstOperand, secondOperand, currentOperation);
    updateDisplay();
    firstOperand = displayValue;
    currentOperation = null;
    displayValue = '';
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function operate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operation) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return (a / b).toString();
        default:
            return '';
    }
}
