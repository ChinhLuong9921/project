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