// (-------------------------1------------------------)
// Reassign array_____________________________________________

const source = [1, 2, 3, 4, 5, 6, 7, 8];

function removeFirst_and_Two(list) {
    const [ , , ...arr] = list;
    return arr;
}

const arr = removeFirst_and_Two(source);

console.log(arr);
console.log(source);

// ____________________________________2______________________________________________________________________________________

// Write a JavaScript program to swap two halves of a given array of integers of even length.

function swap_two_halves(arr) {
    if (arr.length % 2 === 0) {
        arr = arr.join('');
        let arr1 = arr.substring(0, arr.length/2).split('');
        let arr2 = arr.substring(arr.length/2).split('');
        
        return [...arr2, ...arr1];
    }
    return 'array has not even length';
}

console.log(swap_two_halves([1, 2, 3, 4, 5, 6]));
console.log(swap_two_halves([1, 2, 3, 4, 5]));

// _______________________________________3_______________________________________________________________________________________________

// Write a JavaScript program 
// to combine the numbers of a given array into an array containing all combinations.

const powerset1 = args => args.reduce((acc, el) => [...acc, ...acc.map((e) => [...e,el] )], [[]]);

console.log(powerset1([1, 2]));
console.log(powerset1([1, 2, 3]));
console.log(powerset1([1, 2, 3, 4]));

// ????????????????????
// ______________________________________________________________________________________________________________________________

const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));
// ??????????????????

// ________________________________________4___________________________________________________________________________________________

// Write a JavaScript program to converts a specified number to an array of digits.

// Note: Convert the number to a string, using the spread operator (...) to build an array.

const convert = num => [...`${num}`].map(i => parseInt(i));
// đầu tiên chuyển các chữ số thành mảng
// sau đó lọc để lấy ra các chữ số nguyên

console.log(convert(123455));
console.log(convert('12342354jf'));

// _________________________________________5______________________________________________________________________________________________

// Write a JavaScript program to replace the names of multiple object keys with the values provided.

const rename_keys = (keysMap, obj) => 
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{[keysMap[key] || key]: obj[key]}
    }),
    {}
);

const obj = {
  name: 'Bobo',
  job: 'Programmer',
  shoeSize: 100
}
console.log(rename_keys({name: 'firstName', job: 'Actor'}, obj));

// ???????????????

// ____________________________________________6_____________________________________________________________________________________

// Write a JavaScript program to decapitalize the first letter of a string.


const decapitalize = ([first, ...rest], uppper_rest = false) => 
  first.toLowerCase() + (uppper_rest ? rest.join('').toUpperCase() : rest.join(''));

console.log(decapitalize('Chinh', true));
console.log(decapitalize('Dinh'));

// ________________________________________7________________________________________________________________________________________________

// Write a JavaScript program 
// to find every element that exists in any of the two given arrays once, using a provided comparator function.

const exists_once = (firstArr, secondArr, fn) => {
  let arr1 = new Set(firstArr),
      arr2 = new Set(secondArr);
  return [...arr1].filter(e => arr2.has(e)).filter(x => fn(x));
};

console.log(exists_once([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], (x) => x >= 1));
console.log(exists_once([23, 34, 56, 77, 88], [23, 56, 72, 77, 88], (x) => x % 2 === 0));

// __________________________________________8____________________________________________________________________________-

const union_With = (a, b, comp) =>
 Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));

console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));
// ???????????????????????

// ___________________________________9_______________________________________________________________________________________________

// Write a JavaScript program 
// to create a function that invokes each provided function with the arguments it receives and returns the results.

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);

console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));
// ?????????????

// _____________________________________________10___________________________________________________________________________________________

// Write a JavaScript program 
// to get a customized coalesce function that returns the first argument 
// that returns true from the provided argument validation function.

const coalesce_factory = valid => (...args) => args.find(valid);
const custom_coalesce = coalesce_factory(val => ![null, undefined, '', NaN].includes(val));

console.log(custom_coalesce(undefined, null, NaN, 'DinhChinh'));
  
// ___________________________________11___________________________________________________________________________________________________________________________

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

// _____________________________________12__________________________________________________________________________________-

// Write a JavaScript program 
// to take any number of iterable objects or objects 
// with a length property and returns the longest one.
 
const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];

console.log(longestItem('this', 'is', 'a', 'testcase'));
console.log(longestItem(...['a', 'ab', 'abc']));
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'));
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longestItem([1, 2, 3], 'foobar'));

// ______________________________________13___________________________________________________________________________________________

// Write a JavaScript program to get the maximum value of an array, 
// after mapping each element to a value using the provided function.

const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));
