// Write a JavaScript program to find the largest of three given integers.

function find_largest(a, b, c) {
    let maxNum = 0;
    if (a > b) {
        maxNum = a;
    } else {
        maxNum = b;
    }
    if (c > maxNum) {
        return c;
    } else {
        return maxNum;
    }
}

console.log(find_largest(50, 60, 1));
console.log(find_largest(12, 23, -11));