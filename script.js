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

function Operate(fNumber, sNumber, operat) {
    if (operat === "+") return Add(fNumber, sNumber);
    else if (operat === "-") return Subtract(fNumber, sNumber);
    else if (operat === "*") return Multiply(fNumber, sNumber);
    else if (operat === "/") return Divide(fNumber, sNumber);
    else return "Error";
}
