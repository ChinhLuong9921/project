
// Write a JavaScript program
// to check two given non-negative integers
// and if one of the number (not both) is multiple of 7 or 11.

function valCheck (a, b) {
    if (a < 0 && b < 0) return false;
    if (!((a % 7 == 0 || a % 11 == 0) && (b % 7 == 0 || b % 11 == 0))) {
        return ((a % 7 == 0 || a % 11 == 0) || (b % 7 == 0 || b % 11 == 0));
    }
    return false;
}
console.log(valCheck(14, 21));
console.log(valCheck(14, 20));
console.log(valCheck(16, 20));

//____________________________________________________________________________________________

function multiple_7_and_11(x, y) {
    for (let i of arguments) {
        if (i < 0) {
            return false;
        }
    }
    var isX = (x % 7 == 0 || x % 11 == 0);
    var isY = (y % 7 == 0 || y % 11 == 0);
    return (isX != isY);
}

console.log(multiple_7_and_11(21, 21));
console.log(multiple_7_and_11(1, 7));
console.log(multiple_7_and_11(11, 1));
console.log(multiple_7_and_11(10, 10));

