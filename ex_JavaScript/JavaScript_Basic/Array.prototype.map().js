// (------------------------------------1--------------------------)
// Write a JavaScript program to reverse the elements of a given array of integers length 3.

const reverse_arr = arr => 
  arr.map((val, idx) => arr[arr.length - idx - 1]);

console.log(reverse_arr([5, 4, 3])); 
console.log(reverse_arr([1, 0, -1]));  
console.log(reverse_arr([2, 3, 1]));

//_____________________________________2_____________________________________________

// Write a JavaScript program
// to find the larger value between the first or last and set all the other elements with that value.
// Display the new array.

const larger_in_arr = nums => 
  nums.map((e, i) => nums[i] = Math.max(nums[0], nums[2]));

console.log(larger_in_arr([1, 2, 3]));
console.log(larger_in_arr([2, 3, 5]));

//_______________________________________3_____________________________________________

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

const longest_in_arr_ = arr => 
  arr.reduce((acc, val, idx) => acc = Math.max(acc, arr[idx].length), 0);

console.log(longest_in_arr_(['aa', 'aaa', 'aaaaa']));
console.log(longest_in_arr_(['cccc', '', 'cc', 'ccccccccccccc']));
console.log(longest_in_arr_(['aa', 'aaa', 'aaaaa', 'adskfjkfja']));

//_____________________________________4___________________________________________________________

// Write a JavaScript code to divide an given array of positive integers into two parts. 
// First element goes to first part, second element goes to second part,
// and third element goes to first part and so on.
//  Now compute the sum of two parts and store into an array of size two.
// [1, 3, 4, 5, 7, 9]
// [1, 4, 7] && [3, 5, 9]
// [12, 17]

const old_and_even = arr => 
  arr
    .reduce((acc, val, i) => (acc[(i%2) ? 0 : 1].push(val), acc), [[], []])
    .map((val) => val.reduce((acc, v) => acc + v, 0));
  

console.log(old_and_even([1, 2, 3, 4, 5]));
console.log(old_and_even([1, 2, 3, 4, 5, 6, 7]));

//______________________________________5_______________________________________________________

// Write a JavaScript program 
// to check if there is at least one element which occurs in two given sorted arrays of integers.

const similar_arr = (arr1, arr2) => {
  let result = false;
  arr1.map((v1) => arr2.map((v2) => {
      if (v1 === v2) result = true;
  }));
  return result;
};

console.log(similar_arr([1, 2, 3], [3, 4, 5]));
console.log(similar_arr([1, 2, 3], [1, 2, 3]));
console.log(similar_arr([1, 2, 3, 4], [2, 5, 6]));
console.log(similar_arr([1, 2, 3], [4, 5, 6]));

// ____________________________________6______________________________________________________________________________________________

// Multiply values ​​in a multi-layer array

const multiplyAll = arr => 
    arr.reduce((acc, val, i) => (arr[i].map((v2, i2) => acc *= arr[i][i2]), acc), 1);
    // ((...), acc): kết quả sẽ trả về acc

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[1, 2], [1, 1]]));

// ______________________________________7________________________________________________________________________________________________

// Filter array into itergers and square them.

const squareList = arr => 
  arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(num => num * num);

console.log(squareList([4, 5.6, -9.8, 3.5, 66, -75, 1.23, 33]));

// __________________________________________8____________________________________________________________________________________________________

// Write a JavaScript program to get the sum of an given array, 
// after mapping each element to a value using the provided function.

const sum_by = (arr, fn) => 
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0);

console.log(sum_by([{n: 1}, {n: 2}, {n: 5}, {n: 10}], o => o.n));
// __________________________________________9__________________________________________________________________________________________________________

// Write a JavaScript program to create an array of key-value pair arrays from an given object.

const object_to_pairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

console.log(object_to_pairs({a: 1, b: 2}));
console.log(object_to_pairs({a: 122, b: 123, c: 1244}));

// ___________________________________________10_______________________________________________________________________________________________________________

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

// ____________________________________________11_________________________________________________________________________________________________________

// Write a JavaScript program 
// to Initialize a two dimension array of given width and height and value.

const initialize_2D_Array = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
  // {length: h}: đối tượng miêu tả chiều dài mà Array.from sắp tạo ra
  // fill: điền val mới vào arr


console.log(initialize_2D_Array(2, 2, 0));
console.log(initialize_2D_Array(3, 3, 3));

// ___________________________________12____________________________________________________________________________________________________

// Write a JavaScript program 
// to initialize an array containing the numbers 
// in the specified range where start and end are inclusive with their common difference step.

const initialize_Array_With_Range = (end, start = 0, step = 1) =>
  Array
    .from({ length: Math.ceil((end + 1 - start) / step) })
    .map((v, i) => i * step + start);

console.log(initialize_Array_With_Range(5)); 
console.log(initialize_Array_With_Range(8, 3));  
console.log(initialize_Array_With_Range(6, 0, 2));  

// _________________________________________13____________________________________________________________________________________________--

// Write a JavaScript program to compute the average of an array, 
// after mapping each element to a value using the provided function.

const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0) 
    / arr.length;

console.log(averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(averageBy([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));

