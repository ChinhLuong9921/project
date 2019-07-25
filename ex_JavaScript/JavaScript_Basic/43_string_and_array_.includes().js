// Write a JavaScript program
// to test if an array of integers of length 2 contains 1 or a 3.

function string_includes(nums) {
    return (nums.includes(1) || nums.includes(3));
}

console.log(string_includes([1, 5]));  
console.log(string_includes([2, 3]));  
console.log(string_includes([7, 5]));

// string.includes(searchvalue, start)________________________________________________
// searchValue: kí tự cần tìm
// start: vị trí bắt đầu tìm. mặc định là 0

function reverse_includes(nums) {
return (!(nums.includes(1) || nums.includes(3)));
}

console.log(reverse_includes([1, 3, 4]));
console.log(reverse_includes([2, 4]));
console.log(reverse_includes([1, 4]));

//________________________________________________________________________________________

// Write a JavaScript program 
// to find the number of even values in sequence before the first occurrence of a given number.

// Sample sequence = [1,2,3,4,5,6,7,8]
// Given number: 5
// Output: 2

function count_even_value(arr, num) {
    let count = 0;
    if (arr.includes(num)) {
      for (let i = 0; i < arr.indexOf(num); i++) {
        if (arr[i] % 2 === 0) count++;
      } 
    } else return undefined;
    return count;
  }
  
  console.log(count_even_value([1, 2, 3, 4, 5, 6], 5));
  console.log(count_even_value([2, 3, 5, 7, 8], 8));