// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

function multiplyBy() {
    num1 = document.getElementById('firstNumber').value;
    num2 = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = num1 * num2;
}
function divideBy() {
    num1 = document.getElementById('firstNumber').value;
    num2 = document.getElementById('secondNumber').value;
    document.getElementById('result').innerHTML = num1 / num2;
}

