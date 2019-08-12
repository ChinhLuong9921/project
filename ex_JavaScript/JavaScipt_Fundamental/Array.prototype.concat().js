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
  arr
    .map(typeof fn === 'function' ? fn: val => val[fn])
    .reduce((acc, val, i) => (acc[val] = (acc[val] || []).concat(arr[i]), acc), {});
    // ((...), acc): kết quả trả về acc
    // acc[val]: tạo ra key bên trong đối tượng acc
    // .concat(arr[i]): ghép value của arr cũ vào với key mới 
    // i là key của arr cũ, có nó thì key mới sẽ tìm được value của nó

console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 
console.log(group_By(['one', 'two', 'three'], 'length'));

// _____________________________________________4____________________________________________________________________________________________________

// Write a JavaScript program 
// to create a function that invokes fn with a given context, 
// optionally adding any additional supplied parameters to the beginning of the arguments.

const bind = (fn, context, ...args) =>
  function() {
    return fn.apply(context, args.concat(...arguments));
  };
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'Morning' };
const freddyBound = bind(greet, freddy);

console.log(freddyBound('Good', '!'));

// ____________________________________________5_____________________________________________________________________________________________________________________

// Write a JavaScript program 
// to create a function that invokes the method at a given key of an object, 
// optionally adding any additional supplied parameters to the beginning of the arguments.

const bindKey = (context, fn, ...args) =>
  function() {
    return context[fn].apply(context, args.concat(...arguments));
  };

const freddy = {
  user: 'fred',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
const freddyBound = bindKey(freddy, 'greet');

console.log(freddyBound('hi', '!'));
