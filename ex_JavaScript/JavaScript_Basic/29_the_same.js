// Write a JavaScript program to check three given numbers,
// if the three numbers are same return 30 otherwise return 20 
// and if two numbers are same return 40.

function theSame(a, b, c) {
    if (a == b && a == c) return 30;
    else if (a == b || a == c) return 40;
    return 20;
}

console.log(theSame(10, 10, 2));
console.log(theSame(10, 10, 10));
console.log(theSame(2, 3, 4));