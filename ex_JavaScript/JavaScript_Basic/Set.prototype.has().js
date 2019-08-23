// _______________________________________________________________________________________________________

// Write a JavaScript program 
// to get the symmetric difference between two given arrays, 
// after applying the provided function to each array element of both.

const symmetricDifferenceBy = (a, b, fn) => {
    const sA = new Set(a.map(v => fn(v))),
      sB = new Set(b.map(v => fn(v)));
    return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// ______________________________________________2___________________________________________________

// Write a JavaScript program to get the symmetric difference between two given arrays.

const symmetricDifference = (a, b) => {
    const sA = new Set(a),
      sB = new Set(b);
    return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
  };
  
  console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));
  