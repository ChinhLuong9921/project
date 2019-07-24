// Write a JavaScript program 
// to find the maximum possible sum of some of its k consecutive numbers 
// (numbers that follow each other in order.) 
// of a given array of positive integers.

function maximumSum(nums, k) {
    let result = 0;
    let temp_sum = 0;
    for (var i = 0; i < k - 1; i++) temp_sum += nums[i];
    // lấy k số đầu tiên và cộng lại với nhau
    for (var i = k - 1; i < nums.length; i++) {
      temp_sum += nums[i];
      if (temp_sum > result) result = temp_sum;
      temp_sum -= nums[i - k + 1];
    }
    // trừ dần từng số đầu tiên của nhóm 3 số và tìm ra tổng 3 số lớn nhất
    return result;
}
  
console.log(maximumSum([1, 2, 3, 14, 5], 2));
console.log(maximumSum([2, 3, 5, 1, 6], 3));
console.log(maximumSum([9, 3, 5, 1, 7], 2));
  
