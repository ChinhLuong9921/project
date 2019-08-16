// _________________________________________________________________________________________________________________

// Write a JavaScript program 
// that will return  true if the provided predicate 
// function returns false for all elements in a collection, false otherwise.

const none = (arr, fn = Boolean) => !arr.some(fn);
console.log(none([0, 1, 3, 0], x => x == 2));
console.log(none([0, 0, 0]));
