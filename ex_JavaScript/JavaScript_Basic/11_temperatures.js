// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
// C = (5/9) * (F - 32)
function CtoF(cel) {
    return (9*cel + 160) / 5;
}
function FtoC(fah) {
    return (fah - 32) * 5 / 9;
}

console.log(CtoF(60));

