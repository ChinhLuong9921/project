// (----------------------1---------------------)
// Ternary Operator________________________________
function example() {
    return condition1 ? value1
        :  condition2 ? value2
        :  condition3 ? value3
        : value4;
}

// The same_____________________________
// function example() {
//     if (condition1) return value1;
//     else if (condition2) return value2;
//     else if (condition3) return value3;
//     else return value4;
// }

// ________________________________________2______________________________________________________________________________________

// Write a JavaScript program to determine whether a given year is a leap year 
// in the Gregorian calendar.
// divisible by 4 
// not divisible by 100

function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    // if (year % 100 === 0) return year % 400 === 0;
    // else return year % 4 === 0;
}

console.log(leapYear(2016));

// _____________________________________3______________________________________________________________________________________________

// Write a JavaScript program to create an array of prefix sums of the given array.

// In computer science, the prefix sum, cumulative sum, inclusive scan, 
// or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., 
// the sums of prefixes of the input sequence:
// y0 = x0	
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// ...

function accumulate(iterable, func = (x, y) => x + y) {
    return iterable.reduce((a, c) => {
      a.push(a.length > 0 ? func(a[a.length - 1], c) : c);
      return a;
    }, []);
}
  
console.log(accumulate([1, 2, 3, 4, 5]));
console.log(accumulate([1, 2, -3, 4, -5, 6]));

// ___________________________________4_________________________________________________________________________________________________

// Write a JavaScript program to convert an integer to a suffixed string, 
// adding am or pm based on its value.

const get_Meridiem_Suffix_Of_Integer = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';

console.log(get_Meridiem_Suffix_Of_Integer(0));
console.log(get_Meridiem_Suffix_Of_Integer(11));
console.log(get_Meridiem_Suffix_Of_Integer(13));
console.log(get_Meridiem_Suffix_Of_Integer(25));

// ______________________________________________5_____________________________________________________________________

// Write a JavaScript program to test a value, x, against a predicate function. 
// If true, return fn(x). Else, return x.

// Return a function expecting a single value, x, 
// that returns the appropriate value based on pred.
 
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
console.log(doubleEvenNumbers(2));
console.log(doubleEvenNumbers(1));
