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

// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
 
const omit = (obj, arr) => 
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    // lọc ra các phần tử không có trong arr
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
    // gán các key-value pair cho object acc mới

console.log(omit({a: 1, b: 2, c: 3}, ['a']));
console.log(omit({a: 'abc', abc: 'abcd', abcd: 'abcde'}, ['a', 'abcd']));

// __________________________________3________________________________________________________________________________

// Write a JavaScript program to create an array of key-value pair arrays from an given object.

const object_to_pairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

console.log(object_to_pairs({a: 1, b: 2}));
console.log(object_to_pairs({a: 122, b: 123, c: 1244}));


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
  
// ___________________________________5___________________________________________________________________________________________________________________________

// The Object.getPrototypeOf() method returns the prototype 
// (i.e. the value of the internal [[Prototype]] property) of the specified object.

const functions = (obj, inherited = false) => 
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    // ...Object.keys(Object.getPrototypeOf(obj)): 
    // dùng để lấy prototype của object nhưng được khai báo bên ngoài object
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');

function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;

console.log(functions(new Foo()));
console.log(functions(new Foo(), true));

// ____________________________________6__________________________________________________________________________________________

// Write a JavaScript program to create a deep clone of an object.

const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object
    .keys(clone)
    .forEach(
      key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};
const a = {foo: 'bar', obj: {a: 1, b: 2}};
const b = deepClone(a);
console.log(b);

// _____________________________________7_________________________________________________________________________________________________

// Write a JavaScript program to iterate over all own properties of an object, 
// running a callback for each one.

const forOwn = (obj, fn) => 
  Object
    .keys(obj)
    .forEach(k => fn(obj[k], obj, k));

forOwn({foo: 'bar', a: 1}, v => console.log(v));

// ________________________________________8___________________________________________________________________________________________________________

// Write a JavaScript program 
// to invert the key-value pairs of an object, without mutating it. 
// The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. 
// If a function is supplied, it is applied to each inverted key.

const invertKeyValues = (obj, fn) => 
  Object
    .keys(obj)
    .reduce((acc, key) => {
      const val = fn ? fn(obj[key]) : obj[key];
      acc[val] = acc[val] || [];
      acc[val].push(key);
      return acc;
    }, {});

console.log(invertKeyValues({ a: 1, b: 2, c: 1 }));
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value));

// _______________________________________9__________________________________________________________________________________________________

// Write a JavaScript program 
// to create an object with keys generated 
// by running the provided function for each key and the same values as the provided object.

const mapKeys = (obj, fn) =>
  Object
    .keys(obj)
    .reduce((acc, k) => (acc[fn(obj[k], k, obj)] = obj[k], acc), {});

console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val));

// ________________________________________10______________________________________________________________________________________________

// Write a JavaScript program 
// to create an object with the same keys as the provided object and values generated 
// by running the provided function for each value.

const mapValues = (obj, fn) => 
  Object
    .keys(obj)
    .reduce((acc, k) => (acc[k] = fn(obj[k], k, obj), acc), {});

const users = {
  fred: {user: 'fred', age: 40},
  pebbles: {user: 'pebbles', age: 1}
};

console.log(mapValues(users, u => u.age));

// _____________________________________________11__________________________________________________________________________

// Write a JavaScript program 
// to create an object composed of the properties the given function returns truthy for. 
// The function is invoked with two arguments: (value, key).

const pickBy = (obj, fn) =>
  Object
    .keys(obj)
    .filter(k => fn(obj[k], k, obj))
    .reduce((acc, key) => (acc[key] = obj[key], acc), {});
    
console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));

// ______________________________________________12__________________________________________________________________________________

// Write a JavaScript program to unflatten an object with the paths for keys.


const unflattenObject = obj => 
  Object
    .keys(obj)
    .reduce((acc, k) => {
      if (k.indexOf('.') !== -1) {
        const keys = k.split('.');
        Object.assign(
          acc,
          JSON.parse(
            '{' +
              keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
              obj[k] +
              '}'.repeat(keys.length)
              // ??????????????
          )
        );
      } else acc[k] = obj[k];
      return acc;
    }, {});

// console.log(unflattenObject({'a.b.c': 1, d: 1}));
console.log(unflattenObject({ 'a.b.c': 1, d: 1 }));

// ________________________________________________13__________________________________________________________________

// Write a JavaScript program 
// to apply a function against an accumulator and each key in the object (from left to right).

const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
console.log(transform(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    // ??????????
    return r;
  },
  {}
));

// _____________________________________________________14__________________________________________________________

// Write a JavaScript program 
// to get removed elements from the end of an given array until the passed function returns true.
 
const takeRightWhile = (arr, func) => {
  for (let i of arr.reverse().keys())
    if (func(arr[i])) return arr.reverse().slice(arr.length - i, arr.length);
  return arr;
  // ??????????
};

console.log(takeRightWhile([1, 2, 3, 4], n => n < 3));
