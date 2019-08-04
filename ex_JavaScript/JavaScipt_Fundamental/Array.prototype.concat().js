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