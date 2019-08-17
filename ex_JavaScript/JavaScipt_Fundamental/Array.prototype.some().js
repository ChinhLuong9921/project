// _________________________________________________________________________________________________________________

// Write a JavaScript program 
// that will return  true if the provided predicate 
// function returns false for all elements in a collection, false otherwise.

const none = (arr, fn = Boolean) => !arr.some(fn);
console.log(none([0, 1, 3, 0], x => x == 2));
console.log(none([0, 0, 0]));

// ___________________________________________2____________________________________________________________________________

// Write a JavaScript program 
// to get all unique values (form the right side of the array) of an array, 
// based on a provided comparator function.

const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

console.log(uniqueElementsByRight(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));

// _____________________________________________3_____________________________________________________________________________________

// Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

console.log(uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));
