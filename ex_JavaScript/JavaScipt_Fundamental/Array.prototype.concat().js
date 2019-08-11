// (-------------------------------------1----------------------------------------------)
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

// ?????????????????????????


// _____________________________________________________2__________________________________________________________________________________________________________________

// Write a JavaScript program 
// to create a new array out of the two supplied by creating each possible pair from the arrays.

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
// reduce: giúp tích lũy các mảng mới được tạo ra và trả về 1 mảng lớn
// concat để ghép mảng mới với mảng lớn
// map: ghép từng phần tử nhỏ để tạo mảng mới

console.log(xProd([1, 2], [3, 4]));
console.log(xProd([1, 2, 3, 4], ['a', 'b', 'c', 'd']));

// ___________________________________________3_______________________________________________________________________________________________________________

// Write a JavaScript program to group the elements of an given array based on the given function.
const group_By = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    // ??????????????
    return acc;
  }, {});
console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 
console.log(group_By(['one', 'two', 'three'], 'length'));
