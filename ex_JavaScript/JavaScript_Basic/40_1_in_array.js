// Write a JavaScript program
// to check if 1 appears in first or last position of a given array of integers.
// The array length must be greater or equal to 1.

function one_in_array(arr) {
    if (arr.length < 1) return false;
    return (arr[0] == 1 || arr[arr.length - 1] == 1);
}

console.log(one_in_array(['1', '2', '3', '1']));
console.log(one_in_array(['2', '3', '1']));
console.log(one_in_array([2, 4, 4]));
