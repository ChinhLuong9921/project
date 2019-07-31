// (-------------------------1------------------------)
// Reassign array_____________________________________________

const source = [1, 2, 3, 4, 5, 6, 7, 8];

function removeFirst_and_Two(list) {
    const [ , , ...arr] = list;
    return arr;
}

const arr = removeFirst_and_Two(source);

console.log(arr);
console.log(source);

// ____________________________________2______________________________________________________________________________________

// Write a JavaScript program to swap two halves of a given array of integers of even length.

function swap_two_halves(arr) {
    if (arr.length % 2 === 0) {
        arr = arr.join('');
        let arr1 = arr.substring(0, arr.length/2).split('');
        let arr2 = arr.substring(arr.length/2).split('');
        
        return [...arr2, ...arr1];
    }
    return 'array has not even length';
}

console.log(swap_two_halves([1, 2, 3, 4, 5, 6]));
console.log(swap_two_halves([1, 2, 3, 4, 5]));
