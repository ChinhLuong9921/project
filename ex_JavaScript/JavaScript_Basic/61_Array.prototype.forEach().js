// Write a JavaScript program 
// to find the number which appears most in a given array of integers.

function find_num_appears(arr) {
    let counter = {};
    arr.forEach((val) => counter[val] = (counter[val] || 0) + 1);
    return counter;
}

console.log(find_num_appears([1, 2, 3, 5, 67, 7, 8, 99, 1, 2, 3, 55, 67]));