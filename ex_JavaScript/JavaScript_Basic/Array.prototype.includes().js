// (-----------------------1----------------)
// Write a JavaScript program to find all distinct prime factors of a given integer

function prime_factors(num) {
    const is_prime = num => {
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const result = [];

    for (let i = 0; i <= num; i++) {
        while (is_prime(i) && num % i === 0) {
            if (!result.includes(i)) result.push(i);
            num /= i;
        }
    }
    
    return result;
}

//_______________________________________________________________________________________________

const prime_seq = num => {
    let prime_arr = [];
    let flag;

    for (let i = 2; i <= num; i++) {
        flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag) prime_arr.push(i);
    }

    return prime_arr;
};

function prime_Factors(num) {
    let primes_arr = prime_seq(num);
    let factors = primes_arr.filter(e => {
        return num % e == 0;
    });

    return '' + factors;
}

console.log(prime_Factors(99));
console.log(prime_Factors(101));
console.log(prime_Factors(228));

// ____________________________________2_________________________________________________________________________

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

//_____________________________________3___________________________________________________

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

// _______________________________________4______________________________________________________________________________

// Write a JavaScript program to filter out the element(s) of an given array, that have one of the specified values.

const without = (arr, ...args) => arr.filter(v => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));

// ________________________________________5_____________________________________________________________________________

// // Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
 
const omit = (obj, arr) => 
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({a: 1, b: 2, c: 3}, ['a']));
console.log(omit({a: 'abc', abc: 'abcd', abcd: 'abcde'}, ['a', 'abcd']));