const screen = document.getElementById('screen');
const history = document.getElementById('history');

let num1 = "";
let num2 = "";
let result = 0;
let what_operator = "";
let if_operator = false;

function reciveNumber(number) {    
    if (!if_operator) {
        num1 += number;
        screen.innerText = num1;
    } else {
        num2 += number;
        screen.innerText = num2;
    }
}

function reciveOperator(operator) {
    if_operator = true;
    screen.innerHTML = 0;
    
    if (num1 !== "" && num2 !== "" || num1 === "" && num2 !== "") {
        sequence();
    } else if (num1 === "" && num2 === "") {
        history.innerText = result;
    } else if (num1 !== "" && num2 === "") {
        history.innerText = num1;
    }
    
    what_operator = operator;
}

function calculate() {
    if (num1 === '') {
        num1 = result;
    }

    try {
        result = eval(`${num1}${what_operator}${num2}`);

        if (result % 1 !== 0) {
            result = result.toFixed(4).replace(/\.?0+$/, '');
        }

        screen.innerText = result;
        history.innerText = '';
    }
    catch (error) {
        result = "Error";
    }

    if_operator = false;
    num1 = "";
    num2 = "";
    what_operator = "";
}

function sequence() {
    if (num1 === '') {
        num1 = result;
    }

    result = eval(`${num1}${what_operator}${num2}`);
    screen.innerText = result;

    num1 = result;
    history.innerText = '';
    num2 = '';
}
