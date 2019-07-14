// Write a JavaScript program to check two given numbers 
// and return true if one of the number is 50 or if their sum is 50.

function test50(num1, num2) {
    return (num1 === 50 || num2 === 50 || (num1+num2) === 50);
}
console.log(test50(20, 0));
console.log(test50(20, 30));
console.log(test50(2, 50));