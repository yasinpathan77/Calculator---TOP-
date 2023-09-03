let firstNumber = 0, secondNumber = 0, operator = "";
let displayNumber = 0;
let display = document.querySelector(".display");

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
    if (b == 0) alert("Can't Divide with zero");
    return a / b;
}

function Operate(fNumber, sNumber, operat) {
    if (operat === "+") return Add(fNumber, sNumber);
    else if (operat === "-") return Subtract(fNumber, sNumber);
    else if (operat === "*") return Multiply(fNumber, sNumber);
    else if (operat === "/") return Divide(fNumber, sNumber);
    else return fNumber + sNumber;
}

function Populate() {
    document.querySelectorAll(".number").forEach((element) => {
        element.addEventListener("click", (data) => {
            let value = element.getAttribute("data-number");
            console.log(value);
            SetDisplayNumber(value)
        });
    });

    document.querySelectorAll(".funcionality").forEach((element) => {
        element.addEventListener("click", (data) => {
            let value = element.getAttribute("data-functionality");
            console.log(value);
            CalculateValue(value);
        });
    })
}

function SetDisplayNumber(num) {
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

function CalculateValue(value) {
    if (operator === "") operator = value;

    if (firstNumber === 0 && value !== "=") {
        firstNumber = displayNumber;
        displayNumber = 0;
    }
    else if ((secondNumber === 0 || value === "=") && (displayNumber !== 0 || firstNumber !== 0)) {
        secondNumber = displayNumber;
        firstNumber = RoundTwoDecimal(Operate(Number(firstNumber), Number(secondNumber), operator));
        display.innerText = firstNumber;
        SetDefaultValue();
    }
}

function RoundTwoDecimal(num) {
    var numberString = num.toString();
    if (numberString.includes('.')) {
        var fractionalPart = numberString.split('.')[1];

        if (fractionalPart.length > 5) {
            return num.toFixed(2);
        }
    }
    return num;
}

function SetDefaultValue() {
    secondNumber = 0;
    displayNumber = 0;
    operator = "";
}

document.getElementById("clear").addEventListener(("click"), () => {
    SetDefaultValue();
    firstNumber = 0;
    display.innerText = 0;
})

document.getElementById("invert").addEventListener(("click"), () => {
    if (displayNumber === 0) return;
    display.innerText = (display.innerText.includes('-')) ? display.innerText.slice(1) : "-" + display.innerText;
    displayNumber = display.innerText;
});

document.getElementById("percentage").addEventListener(("click"), () => {
    displayNumber *= 0.01;
    display.innerText = displayNumber;
});

document.getElementById("backspace").addEventListener(("click"), () => {
    if (display.innerText === "0") return;
    var displayText = display.innerText.slice(0, -1);
    displayNumber = (displayText === "" || displayText === "-") ? 0 : displayText;
    display.innerText = displayNumber;
})

document.addEventListener('keypress', (event) => {
    var key = event.key;
    var operators = ["*", "/", "+", "-", "="];
    console.log(key);

    if ((key >= 0 && key <= 9 && key !== " ") || key === ".")
        SetDisplayNumber(key);
    if (operators.includes(key))
        CalculateValue(key);

}, false);

window.onload = Populate();

