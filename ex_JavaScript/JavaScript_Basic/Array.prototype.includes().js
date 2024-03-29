// (-----------------------1----------------)
// Write a JavaScript program to find all distinct prime factors of a given integer

const prime_seq = num => {
    let prime_arr = [];
    let flag;
    for (let i = 2; i <= num; i++) {
      flag = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          flag = false;
          break;
        }
      }
      if (flag) prime_arr.push(i);
    }
    return prime_arr;
};
  
const prime_Factors = num => {
    let prime_arr = prime_seq(num);
    return '' + prime_arr.filter(e => num % e === 0);
}
  
console.log(prime_Factors(99));
console.log(prime_Factors(101));
console.log(prime_Factors(228));
  
// ____________________________________2_________________________________________________________________________

// Write a JavaScript program
// to test if an array of integers of length 2 contains 1 or a 3.

const string_includes = nums => (nums.includes(1) || nums.includes(3));

console.log(string_includes([1, 5]));  
console.log(string_includes([2, 3]));  
console.log(string_includes([7, 5]));

// string.includes(searchvalue, start)________________________________________________
// searchValue: kí tự cần tìm
// start: vị trí bắt đầu tìm. mặc định là 0

const reverse_includes = nums => !(nums.includes(1) || nums.includes(3));

console.log(reverse_includes([1, 3, 4]));
console.log(reverse_includes([2, 4]));
console.log(reverse_includes([1, 4]));

//_____________________________________3___________________________________________________

// Write a JavaScript program 
// to find the number of even values in sequence before the first occurrence of a given number.

// Sample sequence = [1,2,3,4,5,6,7,8]
// Given number: 5
// Output: 2

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
  
  
// _______________________________________4______________________________________________________________________________

// Write a JavaScript program to filter out the element(s) of an given array, that have one of the specified values.

const without = (arr, ...args) => arr.filter(v => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));

// ________________________________________5_____________________________________________________________________________

// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
 
const omit = (obj, arr) => 
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    // lọc ra các phần tử không có trong arr
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
    // gán các key-value pair cho object acc mới

console.log(omit({a: 1, b: 2, c: 3}, ['a']));
console.log(omit({a: 'abc', abc: 'abcd', abcd: 'abcde'}, ['a', 'abcd']));


// _________________________________6_____________________________________________________________________________________________

// Write a JavaScript program to get the first non-null / undefined argument.

const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
console.log(coalesce(null, undefined, '', NaN, 'abcd'));

// _______________________________________7________________________________________________________________________

// Write a JavaScript program to add an ordinal suffix to a number.

const toOrdinalSuffix = num => {
  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};

console.log(toOrdinalSuffix('1')); 
console.log(toOrdinalSuffix('4')); 
console.log(toOrdinalSuffix('50')); 
console.log(toOrdinalSuffix('123'));
