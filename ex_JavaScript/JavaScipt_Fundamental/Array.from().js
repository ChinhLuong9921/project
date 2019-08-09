// (-----------------------------1---------------------------------)

// Write a JavaScript program 
// to find every element that exists in any of the two given arrays once, using a provided comparator function.

const exists_once = (firstArr, secondArr, fn) => {
    let arr1 = new Set(firstArr),
        arr2 = new Set(secondArr);
    return [...arr1].filter(e => arr2.has(e)).filter(x => fn(x));
  };
  
console.log(exists_once([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], (x) => x >= 1));
console.log(exists_once([23, 34, 56, 77, 88], [23, 56, 72, 77, 88], (x) => x % 2 === 0));
  
// ______________________________________________________________________________________________________________________-
  
const union_With = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
  
console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));
// ???????????????????????

// ________________________________________2________________________________________________________________________________________

// Write a JavaScript program 
// to get an array of given n random integers in the specified range.


const random_intArray_In_Range = (min, max, length = 1) =>
  Array.from({length: length}, () => Math.floor(Math.random() * (max - min + 1)) + min);

console.log(random_intArray_In_Range(1, 60, 5));
console.log(random_intArray_In_Range(23, 534, 13));