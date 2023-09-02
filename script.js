let firstNumber = 0, secondNumber = 0, operator = "+";
let displayNumber = 0;

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

function Populate() {
    document.querySelectorAll(".number").forEach((element) => {
        element.addEventListener("click", (data) => {
            let value = element.getAttribute("data-number");
            console.log(value);
            SetDisplayNumber(value)
        });
    });
}

function SetDisplayNumber(num) {
    var display = document.querySelector(".display");
    if (displayNumber === 0) {
        if (num === '0') return;
        displayNumber = num;
    }
    else {
        if (displayNumber.toLocaleString().includes('.') && num == '.') return;
        displayNumber += num;
    }
    display.innerText = displayNumber;
}


window.onload = Populate();

