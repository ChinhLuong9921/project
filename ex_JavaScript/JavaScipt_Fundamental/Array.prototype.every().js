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


// ________________________________________4_____________________________________________________________________________________________

// Write a JavaScript program 
// to perform a deep comparison between two values to determine if they are equivalent.

// Note: Check if the two values are identical, 
// if they are both Date objects with the same time, 
// using Date.getTime() or if they are both non-object values with an equivalent value (strict comparison). 
// Check if only one value is null or undefined or if their prototypes differ. 
// If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys, 
// then use Array.every() to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.


const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  // kiểm tra xem đối tượng a, b có phải là trường hợp của Date 
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};

console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));

// __________________________________________5____________________________________________________________________________________________

// Write a JavaScript program to check if all elements in a given array are equal or not.

const allEqual = arr => arr.every(val => val === arr[0]);

console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));

// ____________________________________________6_________________________________________________________________________

// Write a JavaScript program 
// to check if the predicate (second argument) is truthy on all elements of a collection (first argument).

const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);
console.log(truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'));
