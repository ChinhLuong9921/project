// Write a JavaScript program to reverse the elements of a given array of integers length 3.

function reverse_arr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverse_arr([1, 2, 3]));
console.log(reverse_arr([3, 2, 1]));

//_________________________________________________________________________________________________
function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
    // element: currentValue
    // idx: index
    // arr: array
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));

//__________________________________________________________________________________

// Write a JavaScript program
// to find the larger value between the first or last and set all the other elements with that value.
// Display the new array.

function larger_in_arr(nums) {
    const max_val = nums[0] > nums[2] ? nums[0] : nums[2];
    return nums.map((ele, idx, nums) => nums[idx] = max_val); 
}

console.log(larger_in_arr([1, 2, 3]));
console.log(larger_in_arr([2, 3, 2]));

//____________________________________________________________________________________

// Write a JavaScript to find
// the longest string from an given array of strings.

function longest_in_arr(arr) {
    let longest = '';
    arr.map((ele, idx, arr) => {
        longest.length < arr[idx];
        longest = arr[idx];
    })
    return longest;
}

console.log(longest_in_arr(['aa', 'aaa', 'aaaaa']));
console.log(longest_in_arr(['cccc', '', 'cc', 'ccccccccccccc']));
//___________________________________________________________________________________________

function longest_string(arr) {
    let max = arr[0].length;
    arr.map(value => max = Math.max(max, value.length));
    // lần lượt so sánh các value trong array với max để gán max với length lớn nhất
    return arr.filter(value => value.length == max);
}

console.log(longest_string(['x', 'xx', 'xxxxxxxxxx']));

//________________________________________________________________________________________________

// Write a JavaScript code to divide an given array of positive integers into two parts. 
// First element goes to first part, second element goes to second part,
// and third element goes to first part and so on.
//  Now compute the sum of two parts and store into an array of size two.
// [1, 3, 4, 5, 7, 9]
// [1, 4, 7] && [3, 5, 9]
// [12, 17]

function old_and_even(arr) {
    const result = [0, 0];
    arr.map((val, idx, arr) => {
        if (idx % 2) result[1] += arr[idx];
        else result[0] += arr[idx];
    });
    return result;
}

console.log(old_and_even([1, 2, 3, 4, 5, 6]));

//_____________________________________________________________________________________________

// Write a JavaScript program 
// to check if there is at least one element which occurs in two given sorted arrays of integers.

function similar_arr(arr1, arr2) {
    let result = false;
    arr1.map((v1) => {
      arr2.map((v2) => {
        if (v1 === v2) {
          result = true;
        }
      });
    });
    return result;
  } 
  
  console.log(similar_arr([1, 2, 3], [3, 4, 5]));
  console.log(similar_arr([1, 2, 3], [1, 2, 3]));
  console.log(similar_arr([1, 2, 3, 4], [2, 5, 6]));
  console.log(similar_arr([1, 2, 3], [4, 5, 6]));