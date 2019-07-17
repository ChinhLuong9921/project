// Write a JavaScript program 
// to check if the last digit of the three given positive integers is same.

function lastDigit(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return (a % 10 == b % 10 && a % 10 == c % 10 && b % 10 == c % 10);
    }
}

console.log(lastDigit(10, 20, 30));
console.log(lastDigit(10, 1, 30));
console.log(lastDigit(20, 3, 10));