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

// __________________________________2_______________________________________________________________________-

// // Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
 
const omit = (obj, arr) => 
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({a: 1, b: 2, c: 3}, ['a']));
console.log(omit({a: 'abc', abc: 'abcd', abcd: 'abcde'}, ['a', 'abcd']));