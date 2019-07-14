// Write a JavaScript program to check a given integer is within 20 of 100 or 400.
// Check integers from 80 to 120 and from 380 to 420.

function checkInterger(x) {
    return (Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20);
}

console.log(checkInterger(97));
