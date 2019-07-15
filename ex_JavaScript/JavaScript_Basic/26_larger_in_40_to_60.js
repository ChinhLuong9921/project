// Write a JavaScript program
// to find the larger number from the two given positive integers,
// the two numbers are in the range 40..60 inclusive.

function largerNum(a, b) {
    if (Math.abs(50 - a) <= 10 && Math.abs(50 - b) <= 10) {
        if (a > b) {
            return a;
        } else return b;
    } else return 'beyond the range of 40 to 60';
}

console.log(largerNum(10, 30));
console.log(largerNum(40, 50));
console.log(largerNum(40, 20));