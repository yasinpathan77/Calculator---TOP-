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

            let lastClickedElement = document.querySelectorAll(".click");
            if (lastClickedElement[0] !== undefined)
                lastClickedElement[0].classList.toggle('click');
            if (value !== "=") {
                element.classList.toggle('click');
            }
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
    else if ((secondNumber === 0 || value === "=") && displayNumber !== 0) {
        secondNumber = displayNumber;
        firstNumber = RoundTwoDecimal(Operate(Number(firstNumber), Number(secondNumber), operator));
        display.innerText = firstNumber;
        SetDefaultValue();
    }

    if (operator !== value && value !== "=") {
        operator = value;
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
}

function CalculatePercentage() {
    displayNumber *= 0.01;
    display.innerText = displayNumber;
}

function BackspaceDisplayValue() {
    if (display.innerText === "0") return;
    var displayText = display.innerText.slice(0, -1);
    displayNumber = (displayText === "" || displayText === "-") ? 0 : displayText;
    display.innerText = displayNumber;
}

function sleep(seconds) {
    var e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) { }
}

document.getElementById("clear").addEventListener(("click"), () => {
    SetDefaultValue();
    firstNumber = 0;
    display.innerText = 0;
    let selectedElement = document.querySelectorAll(".click");
    if (selectedElement[0] !== undefined)
        selectedElement[0].classList.toggle("click");
})

document.getElementById("invert").addEventListener(("click"), () => {
    if (displayNumber === 0) return;
    display.innerText = (display.innerText.includes('-')) ? display.innerText.slice(1) : "-" + display.innerText;
    displayNumber = display.innerText;
});

document.getElementById("percentage").addEventListener(("click"), CalculatePercentage);

document.getElementById("backspace").addEventListener(("click"), BackspaceDisplayValue)

document.addEventListener('keypress', (event) => {
    var key = event.key;
    var operators = ["*", "/", "+", "-", "="];

    if ((key >= 0 && key <= 9 && key !== " ") || key === ".")
        SetDisplayNumber(key);
    if (operators.includes(key))
        CalculateValue(key);
    if (key === "%")
        CalculatePercentage();

}, false);

document.addEventListener('keydown', (event) => {
    if (event.key == "Backspace") BackspaceDisplayValue();
})

window.onload = Populate();

