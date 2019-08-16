// (---------------------1-------------------)
// Write a JavaScript program to convert the letters of a given string in alphabetical order.

function rearrange_char(text) {
    return text.split('').sort().join('');
    // sort(): sắp xếp các value trong mảng theo thứ tự alphabet (chữ cái đầu mỗi value)
}

console.log(rearrange_char('chinh'));
console.log(rearrange_char('luonga'));

// __________________________________2______________________________________________________________________________

// Write a JavaScript program 
// to check whether it is possible 
// to rearrange characters of a given string in such way 
// that it will become equal to another given string.

function rearrangement_characters(str1, str2) {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    let result = true;
  
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (arr1[i] !== arr2[i]) result = false; 
    }
    return result;
}
  
console.log(rearrangement_characters("xyz", "zyx"));
console.log(rearrangement_characters("xyz", "zyp"));
console.log(rearrangement_characters('chih', 'chinh'));
console.log(rearrangement_characters('cinh', 'nihc'));

// _______________________________3_____________________________________________________________________________

// Write a JavaScript program 
// to create a function that invokes each provided function with the arguments it receives and returns the results.


const get_min_and_max = (...args) => {
  let arr = [...args].sort();
  console.log(arr);
  return Array.from(new Set([arr[0], arr[arr.length - 1]]));
};

console.log(get_min_and_max(1, 2, 3, 4, 5, -7, -6, -7));
// [ -6, -7, -7, 1, 2, 3, 4, 5 ]
// => [-6, 5]
console.log(get_min_and_max(-12, 33, -53, 44, 555, -1));
// [ -1, -12, -53, 33, 44, 555 ]
// => [-1, 555]
// *************

// ___________________________________4____________________________________________________________________________________-

// Write a JavaScript program 
// to take any number of iterable objects or objects 
// with a length property and returns the longest one.
 
const longestItem = (...vals) => [...vals].sort((a, b) => b.length - a.length)[0];

console.log(longestItem('this', 'is', 'a', 'testcase'));
console.log(longestItem(...['a', 'ab', 'abc']));
console.log(longestItem(...['a', 'ab', 'abc'], 'abcd'));
console.log(longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]));
console.log(longestItem([1, 2, 3], 'foobar'));

// ______________________________________5_______________________________________________________________________________________________________________

// Write a JavaScript program 
// to get the n maximum elements from the provided array. 
// If n is greater than or equal to the provided array's length, 
// then return the original array(sorted in descending order).

const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

console.log(maxN([1, 2, 3]));
console.log(maxN([1, 2, 3], 2));

// ________________________________________6______________________________________________________________________________________--

// Write a JavaScript program to get the median of an array of numbers.

// Note: Find the middle of the array, use Array.sort() to sort the values. 
// Return the number at the midpoint if length is odd, 
// otherwise the average of the two middle numbers.

const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
console.log(median([5, 6, 50, 1, -5]));
console.log(median([1, 2, 3, 4, 5]));
