// Write a JavaScript to add two positive integers without carry.

function add_two_int_without_carrying(num1, num2) {
    let result = 0; 
    let x = 1; 
    while (num1 > 0 && num2 > 0) {
        result += x * ((num1 + num2) % 10);
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        x *= 10;
    }
    return result;
}

console.log(add_two_int_without_carrying(1200, 900));
console.log(add_two_int_without_carrying(1234, 5678));
console.log(add_two_int_without_carrying(1, 999999));
    

