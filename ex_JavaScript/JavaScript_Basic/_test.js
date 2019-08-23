// _________________________________________________________________________________________________

// Write a JavaScript program to get the symmetric difference between two given arrays.

const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));
