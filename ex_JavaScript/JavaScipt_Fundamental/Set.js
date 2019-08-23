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

// _____________________________________2____________________________________________________________________________________________

// Write a JavaScript program 
// to return the difference between two arrays, 
// after applying the provided function to each array element of both.

const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(v => fn(v)));
    return a.filter(x => !s.has(fn(x)));
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));

// ________________________________________3___________________________________________________________________________________________________________

// Write a JavaScript program to get every element that exists in any of the two arrays once.
// Note: Create a Set with all values of a and b and convert to an array.

const union = (a, b) => Array.from(new Set([...a, ...b]));
console.log(union([1, 2, 3], [4, 3, 2]));
console.log(union([1, 2, 3], [1, 2, 3]));

// ____________________________________________4___________________________________________________________

// Write a JavaScript program 
// to get the symmetric difference between two given arrays, 
// after applying the provided function to each array element of both.

const symmetricDifferenceBy = (a, b, fn) => {
    const sA = new Set(a.map(v => fn(v))),
      sB = new Set(b.map(v => fn(v)));
    return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
  
// _______________________________________________5__________________________________________________

// Write a JavaScript program to get the symmetric difference between two given arrays.

const symmetricDifference = (a, b) => {
    const sA = new Set(a),
      sB = new Set(b);
    return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
  };
  
  console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));
  