const screen = document.getElementById('screen');

let num1 = '';
let num2 = '';
let result = 0

let what_operator = ""

let if_operator = false;

function reciveNumber(number) {    
    if (if_operator === false) {
        num1 += number;
        screen.innerText = num1;
    } else {
        num2 += number;
        screen.innerText = num2;
    };
};

function reciveOperator(operator) {
    if_operator = true;
    screen.innerHTML = 0;

    what_operator = operator
}

function calculate(operator) {

    if (if_operator) {
        if (what_operator === '+') {
            result = parseFloat(num1) + parseInt(num2)
        } else if (what_operator === '-') {
            result = parseFloat(num1) - parseInt(num2)
        } else if (what_operator === 'x') {
            result = parseFloat(num1) * parseInt(num2)
        } else if (what_operator === '/') {
            result = parseFloat(num1) / parseInt(num2)
        };

        if (result % 1 !== 0) {
            result = result.toFixed(2);
        }

        screen.innerText = result
        
        if_operator = false
        num1 = '';
        num2 = '';
    }
}
