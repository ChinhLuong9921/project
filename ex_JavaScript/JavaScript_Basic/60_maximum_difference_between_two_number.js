// Write a JavaScript program 
// to find the maximum difference between any two adjacent elements of a given array of integers.

function max_difference(arr) {
    let max = -1;
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        temp = Math.abs(arr[i] - arr[i+1]);
        max = Math.max(max, temp);
    }
    return max;
}

console.log(max_difference([1, 2, 3, 543, 756, 434]));