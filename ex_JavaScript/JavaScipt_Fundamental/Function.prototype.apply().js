
// Write a JavaScript program 
// to create a function that invokes each provided function with the arguments it receives and returns the results.

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
// Function.prototype.apply(thisArg, argsArr);
// thisArg: null ==> global object (this chỉ về đối tượng toàn cục)
// return: The result of calling the function with the specified this value and arguments.
const minMax = over(Math.min, Math.max);

console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));
// ?????????????
