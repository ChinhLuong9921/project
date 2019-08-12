// (------------------1----------------------)
// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function area(a, b, c) {
    return Math.sqrt((a+b+c) * (a+b-c) * (a+c-b) * (b+c-a)) / 4;
}
let triangle = area(5, 6, 7);
console.log(triangle);

// ____________________________________2___________________________________________________________________________________________

/*
Write a JavaScript program 
where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. 
If the user input matches with guess number, 
the program will display a message "Good Work" 
otherwise display a message "Not matched"
*/

let guess = prompt('Enter, your number (between 1 to 10):');
let randomNumber = Math.ceil(Math.random() * 10);

if (guess < 1 || guess > 10) {
    console.log('Sorry, please re-enter');
} else {
    if (guess == randomNumber) {
        console.log('Good Work');
    } else {
        console.log(`Not matched, the result is ${randomNumber}`);
    }
}

// ______________________________________________________________________________________________________________________________

const get_random = (start, end) => 
  Math.random() * (end - start) + start;

console.log(get_random(1, 2));
console.log(get_random(1, 10));

// ____________________________________3____________________________________________________________________________

// Write a JavaScript program 
// to find the maximum number from a given positive integer 
// by deleting exactly one digit of the given number.

function digit_delete(num) {
    let result = 0;
    const arr = [];
    while (num) {
      arr.push(num % 10);
      // đẩy ngược kết hợp với vòng lặp ngược thứ 2 sẽ tạo ra số thuận với đối số nhập vào
      num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
      let n = 0;
      for (let j = arr.length - 1; j >= 0; j--) {
        if (i !== j) n = n * 10 + arr[j];
        // 2
        // 23
        // 234
        //.....
      }
      result = Math.max(n, result);
    }
    return result;
}
  
console.log(digit_delete(1234));
console.log(digit_delete(98789));
console.log(digit_delete(1909));
console.log(digit_delete(199199));
  
// _____________________________________4___________________________________________________________________________________

// Write a JavaScript program to check a given integer is within 20 of 100 or 400.
// Check integers from 80 to 120 and from 380 to 420.

function checkInterger(x) {
    return (Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20);
}

console.log(checkInterger(97));

// ____________________________________5______________________________________________________________________________________________

// Write a JavaScript program
// to find a value which is nearest to 100 from two different given integer values.

function nearest_100(a, b) {
    return (Math.abs(100 - a) < Math.abs(100 - b)) ? a : b;
}

console.log(nearest_100(12, 13));
console.log(nearest_100(99, 99));
console.log(nearest_100(-1, 102));

// _____________________________________6__________________________________________________________________________________________________

// Write a JavaScript program
// to check if two numbers are in range 40..60 or in the range 70..100 inclusive.

const checkNum = (a, b) => {
    if (Math.abs(50 - a) <= 10 || Math.abs(85 - a) <= 15) {
        if (Math.abs(50 - b) <= 10 || Math.abs(85 - b) <= 15) {
            return true;
        }
    } else return false;
}

console.log(checkNum(45, 45));
console.log(checkNum(12, 56));
console.log(checkNum(102, -1));

// ___________________________________7______________________________________________________________________________________

// Write a JavaScript program
// to find the larger number from the two given positive integers,
// the two numbers are in the range 40..60 inclusive.

function largerNum(a, b) {
    if (Math.abs(50 - a) <= 10 && Math.abs(50 - b) <= 10) {
        if (a > b) {
            return a;
        } else return b;
    } else return 'beyond the range of 40 to 60';
}

console.log(largerNum(10, 30));
console.log(largerNum(40, 50));
console.log(largerNum(40, 20));

// ____________________________________8_____________________________________________________________________________________________

// Write a JavaScript program
// to check if a given number in the range 40..10000 presents in two number (in same range).
// For example 40 presents in 400 and 4000.

function theRange(a, b, x) {
    if ((a < 40 || b > 10000) && (b < 40 || b > 10000)) return false;
    return Math.abs(a - b) >= Math.abs(a - x) && Math.abs(a - b) >= Math.abs(b - x); 
}

console.log(theRange(1, 3, 2));
console.log(theRange(100, 10000, 10200));
console.log(theRange(120, 1230, 1100));
console.log(theRange(1, 3, 3));
console.log(theRange(40, 100, 60));

// ______________________________________9__________________________________________________________________________________________

// Write a JavaScript to add two positive integers without carry.

function add_two_int_without_carrying(num1, num2) {
    let result = 0; 
    let x = 1; 
    while (num1 > 0 && num2 > 0) {
        result += x * ((num1 + num2) % 10);
        num1 = Math.floor(num1 / 10);
        num2 = Math.floor(num2 / 10);
        x *= 10;
    }
    return result;
}

console.log(add_two_int_without_carrying(1200, 900));
console.log(add_two_int_without_carrying(1234, 5678));
console.log(add_two_int_without_carrying(1, 999999));
    
// _____________________________________10__________________________________________________________________________________

// Write a JavaScript program 
// to find the maximum difference between any two adjacent elements of a given array of integers.

function max_difference(arr) {
    let max = -1;
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        temp = Math.abs(arr[i] - arr[i+1]);
        max = Math.max(max, temp);
    }
    return max;
}

console.log(max_difference([1, 2, 3, 543, 756, 434]));

// ____________________________________11_________________________________________________________________________________________

// Write a JavaScript program 
// to compute the sum of absolute differences of consecutive numbers of a given array of integers.

function sumAbs(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i] - arr[i+1]);
    }
    return sum;
}

console.log(sumAbs([0, 0, 0]));
console.log(sumAbs([1, 2, 1, 1, 1]));
console.log(sumAbs([1]));
console.log(sumAbs([1, 2, -5, -66, 55]));

// ______________________________________________________________________________________________________________

function absum(arr) {
	return arr.reduce((subtrs, item, inx, arr) => {
		//if 'inx' is the last element in the array, subtract first element from the last.
  		let el = (inx === arr.length-1) ? arr[0]: arr[inx+1];
	 		subtrs.push(Math.abs(Math.abs(item) - Math.abs(el)));
  				if (subtrs.length === arr.length) {
  					return subtrs.reduce((a,b) => {return a+b});
  				}
      
  		return subtrs;
		}, []);
}
let array = [1, 2, 3, 2, -5];
console.log(absum(array));

// ???????????????????????????????????????

// ______________________________________12______________________________________________________________________________________________________________

// Write a JavaScript program 
// to find the number of times to replace a given number 
// with the sum of its digits until it convert to a single digit number.
// 123 => 1+2+3=6 => convert 1
// 156 => 1+5+6=12 => 1+2=3 => convert 2

// tính theo quy tắc cộng dồn từng val trong mảng
// dẫn tới convert nhiều lần
function convert_number(num) {
    let convert = 0;
    const arr = [];
    let sum = 0;
    while (num) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > 10) {
        sum = sum%10 + Math.floor(sum/10);
        convert++;
      }
    }
    convert++;
    return convert;
}
  
console.log(convert_number(123));
console.log(convert_number(12345));
console.log(convert_number(9999999999));
console.log(convert_number(10000000000));
console.log(convert_number(999));
  
  
  // tính tổng toàn bộ các val rồi mới convert
  // convert ít lần
function digit_to_one(num) {
    const digitSum = num => {
      let digit_sum = 0;
      while (num) {
        digit_sum += num % 10;
        num = Math.floor(num / 10);
      }
      return digit_sum;
    }
  
    let result = 0;
    while (num >= 10) {
      result++;
      num = digitSum(num);
    }
    return result;
}
  
console.log(digit_to_one(123))
console.log(digit_to_one(12345));
console.log(digit_to_one(9999999999));
console.log(digit_to_one(100000000000));
console.log(digit_to_one(999));

// _________________________________________13______________________________________________________________________________________________________________

// Write a JavaScript program to check if a point lies strictly inside a given circle.

function point_inside_a_circle(a, b, x, y, r) {
    let velocityX = 0;
    let velocityY = 0; 
    if (r <= 0) return false;
    if (x > 0 && a > 0 || x < 0 && a < 0) velocityX = Math.abs(x - a);
    else velocityX = Math.abs(x + a);
    if (y > 0 && b > 0 || y < 0 && b < 0) velocityY = Math.abs(y - b);
    else velocityY = Math.abs(y + b);
  
    return (r > velocityX && r > velocityY);
}
  
console.log(point_inside_a_circle(-1, 4, 0, 0, 5));
console.log(point_inside_a_circle(-5, -5, 1, 2, 9));
console.log(point_inside_a_circle(4, -9, 2, 4, -10));
  
//___________________________________________________________________________________
  
function check_a_point(a, b, x, y, r) {
    const dist_points = (a - x) * (a - x) + (b - y) * (b - y);
    if (r <= 0) return false;
    r *= r;
    if (dist_points < r) return true;
    return false;
}
  
console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, -6));

// ________________________________________14__________________________________________________________________________________________________________________

// Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.

function cubes_all_integer(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += Math.pow(i, 3);
    }
    return sum;
}

console.log(cubes_all_integer(3));
console.log(cubes_all_integer(4));

// ________________________________________15______________________________________________________________________________________________________________________

// Write a JavaScript program to find the number of even digits in a given integer.

function even_digit(num) {
    let arr = [];
    while (num) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) count++;
    }
    return count;
}
  
console.log(even_digit(1230));
console.log(even_digit(9999));
console.log(even_digit(2000));
  
//_________________________________________________________________________________________

function even_digits(num) {
    let ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      // true: được tính là 1 nếu quy đổi ra number
      // false: quy đổi ra 0
      num = Math.floor(num / 10);
    }
    return ctr;
}
  
console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));

// _________________________________________16_____________________________________________________________________________________________________

// Write a JavaScript program to reverse the bits of a given 16 bits unsigned short integer.

function sixteen_bits_reverse(num) {
    let result = 0;

    for (let i = 0; i < 16; i++) {
        result = result*2 + (num%2);
        num = Math.floor(num/2);
    }

    return result;
}

console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(20));
console.log(sixteen_bits_reverse(3));

// ???????????????????????????????????

// _________________________________________17_______________________________________________________________________________________________________________________

// Write a JavaScript program to check if all the digits in a given number are the same or not.

function test_same_digit(num) {
    const unit = num % 10;

    while (num) {
        if (num % 10 !== unit) return false;
        num = Math.floor(num/10);
    }

    return true;
}

console.log(test_same_digit(111110));
console.log(test_same_digit(1111111111));

// _____________________________________________18_______________________________________________________________________________________________________

// Write a JavaScript program 
// to find every element that exists in any of the two given arrays once, using a provided comparator function.

const exists_once = (firstArr, secondArr, fn) => {
    let arr1 = new Set(firstArr),
        arr2 = new Set(secondArr);
    return [...arr1].filter(e => arr2.has(e)).filter(x => fn(x));
};
  
console.log(exists_once([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], (x) => x >= 1));
console.log(exists_once([23, 34, 56, 77, 88], [23, 56, 72, 77, 88], (x) => x % 2 === 0));
  
// ______________________________________________________________________________________________________________________-
  
const union_With = (a, b, comp) =>
   Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
  
console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));
// ???????????????????????

// __________________________________19_____________________________________________________________________________________________

// Write a JavaScript program to convert a value to a safe integer.

const to_Safe_Integer = num => 
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

console.log(to_Safe_Integer('32332'));
console.log(to_Safe_Integer('12.34353456'));
console.log(to_Safe_Integer(Infinity));
console.log(Infinity);

// __________________________________20_______________________________________________________________________________________________________

// Write a JavaScript program 
// to get an array of given n random integers in the specified range.


const random_intArray_In_Range = (min, max, length = 1) =>
  Array.from({length: length}, () => Math.floor(Math.random() * (max - min + 1)) + min);

console.log(random_intArray_In_Range(1, 60, 5));
console.log(random_intArray_In_Range(23, 534, 13));

// ___________________________________4____________________________________________________________________________________________________

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

