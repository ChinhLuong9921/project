// (-------------------------------1----------------------)
// Write a JavaScript program 
// to compare two objects to determine 
// if the first one contains equivalent property values to the second one.

const matches = (obj, source) => 
Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(
    matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(
    matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(
    matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

// __________________________________2_____________________________________________________________________

// Write a JavaScript function 
// that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

const all = (arr, check) => arr.every(check);

console.log(all([3, 4, 5], x => x > 1));
console.log(all([23, 1, 6], x => x > 1));

// ______________________________________3___________________________________________________________________________________________

// Write a JavaScript program to filter out the non-unique values in an array, 
// based on a provided comparator function.
// Note: The comparator function takes four arguments: 
// the values of the two elements being compared and their indexes.

const filter_Non_UniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(filter_Non_UniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
)); 
// ??????????????????
