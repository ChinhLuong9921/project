// Write a JavaScript program to find all elements in an given array except for the first one. 
// Return the whole array if the array's length is 1.

const the_first_one = arr => 
  arr.length === 1 ? arr : arr.slice(1);

console.log(the_first_one([1, 2, 3, 4, 5, 6]));
console.log(the_first_one([1]));
