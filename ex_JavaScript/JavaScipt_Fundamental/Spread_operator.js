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

// ________________________________2___________________________________________________________________________________________________

// Write a JavaScript program to converts a specified number to an array of digits.

// Note: Convert the number to a string, using the spread operator (...) to build an array.

const convert = num => [...`${num}`].map(i => parseInt(i));
// đầu tiên chuyển các chữ số thành mảng
// sau đó lọc để lấy ra các chữ số nguyên

console.log(convert(123455));
console.log(convert('12342354jf'));

// _________________________________________3______________________________________________________________________________________________

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

// ____________________________________________4_____________________________________________________________________________________

// Write a JavaScript program to decapitalize the first letter of a string.


const decapitalize = ([first, ...rest], uppper_rest = false) => 
  first.toLowerCase() + (uppper_rest ? rest.join('').toUpperCase() : rest.join(''));

console.log(decapitalize('Chinh', true));
console.log(decapitalize('Dinh'));

// ________________________________________5________________________________________________________________________________________________

// Write a JavaScript program 
// to find every element that exists in any of the two given arrays once, using a provided comparator function.

const exists_once = (firstArr, secondArr, fn) => {
  let arr1 = new Set(firstArr),
      arr2 = new Set(secondArr);
  return [...arr1].filter(e => arr2.has(e)).filter(x => fn(x));
};

console.log(exists_once([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], (x) => x >= 1));
console.log(exists_once([23, 34, 56, 77, 88], [23, 56, 72, 77, 88], (x) => x % 2 === 0));

// ______________________________________________________________________________________________________________________-

const union_With = (a, b, comp) =>
 Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));

console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));
// ???????????????????????