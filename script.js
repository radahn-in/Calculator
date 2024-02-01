const displayBox = document.querySelector('#display');
const numberBtns = Array.from(document.querySelectorAll('.nmbrBtn'));
const operatorBtns = Array.from(document.querySelectorAll('.opBtn'));
const clearBtn = document.querySelector('#clearBtn');
const equalBtn = document.querySelector('equalBtn');

numberBtns.forEach(button => button.addEventListener("click", addToDisplay));
operatorBtns.forEach(button => button.addEventListener("click", addToDisplay));
equalBtn.addEventListener("click",  equals);
clearBtn.addEventListener("click", clearDisplay);

let operand1 = '';
let operand2 = '';
let operator = '';
let total = '';
let temp = '';
let lastButtonPushed;

function colorChange(e){
    e.target.style.background = 'rgb(169,184,38)';
}

function resetColor() {
    operatorBtns.forEach(button => button.style.background = 'rgb(145,145,153)');
}

function addToDisplay(){

}

function equals(){

}

function clearDisplay(){

}

function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(num1, op, num2){
    total = 0;
    switch(op) {
        case '+':
            total += add(num1, num2);
            displayBox.textContent = total;
            break;
        case '-':
            total += subtract(num1, num2);
            displayBox.textContent = total;
            break;
        case '*':
            total += multiply(num1, num2);
            displayBox.textContent = total;
            break;
        case '/':
            if(num2 == '0'){
                displayBox.textContent = `You can't divide by 0! push Clear.`;
                numberBtns.forEach(button => button.removeEventListener("click", addToDisplay));
                operatorBtns.forEach(button => button.removeEventListener("click", addToDisplay))
            
            } else {
                total += divide(num1, num2);
                displayBox.textContent = total;
            }
            break;

    }
    console.log(total);

}