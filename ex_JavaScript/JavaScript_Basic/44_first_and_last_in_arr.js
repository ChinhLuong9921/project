// Write a JavaScript program
// to swap the first and last elements of a given array of integers.
// The array length should be at least 1.

function first_and_last(arr) {
    if (arr.length > 1) {
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
        return arr;
    }
    return false;
}

console.log(first_and_last([1, 2, 3, 4]));
console.log(first_and_last([1]));