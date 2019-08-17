
// // Write a JavaScript program 
// // to find the number of even values in sequence before the first occurrence of a given number.

// // Sample sequence = [1,2,3,4,5,6,7,8]
// // Given number: 5
// // Output: 2

// function count_even_value(arr, num) {
//   let count = 0;
//   if (arr.includes(num)) {
//     for (let i = 0; i < arr.indexOf(num); i++) {
//       if (arr[i] % 2 === 0) count++;
//     } 
//   } else return undefined;
//   return count;
// }

// console.log(count_even_value([1, 2, 3, 4, 5, 6], 5));
// console.log(count_even_value([2, 3, 5, 7, 8], 8));

const count_even_value = (arr, num) => {
  let count = 0; 
  if (arr.includes(num)) {
    for (let i = 0; i < arr.indexOf(num); i++) {
      if (arr[i] % 2 === 0) count++;
    }
  } else return undefined;
  return count;
};

console.log(count_even_value([1, 2, 3, 4, 5, 6], 5));
console.log(count_even_value([2, 3, 5, 7, 8], 8));

