let firstNumber = 0, secondNumber = 0, operator = "+";


function Add(a, b) {
    return a + b;
}

function Subtract(a, b) {
    return a - b;
}

function Multiply(a, b) {
    return a * b;
}

function Divide(a, b) {
    if (b == 0) return "Can't Divide with zero";
    return a / b;
}
