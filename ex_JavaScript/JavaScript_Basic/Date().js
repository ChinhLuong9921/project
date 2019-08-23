// (-------------------1--------------)
/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday. 
Current time is : 10 PM : 30 : 38
 */

const today = new Date();
const day = today.getDay();
const dayList = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

let hours = today.getHours();
const prepand = (hours >= 12) ? ' PM ' : ' AM ';
hours = (hours >= 12) ? hours - 12 : hours;
const minutes = today.getMinutes();
const seconds = today.getSeconds();

if (hours === 0 && prepand === ' PM ') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        prepand = ' Noon ';
    } else {
        hours = 12;
        prepand = ' AM ';
    }
} else if (hours === 0 && prepand === ' AM ') {
    if (minutes === 0 && seconds === 0) {
        hours = 12;
        prepand = ' Midnight ';
    } else {
        hours = 12;
        prepand = ' PM ';
    }
} 

console.log('Today is: ' + dayList[day]);
console.log(`Current time is: ${hours}${prepand} : ${minutes} : ${seconds}`);

// __________________________________________2_______________________________________________________________________________

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

// _________________________________________3______________________________________________________________________________

/*
Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const today = new Date();
let day = today.getDate();
day = (day < 10) ? '0'+day : day;
let month = today.getMonth() + 1;
month = (month < 10) ? '0'+month : month;

console.log(`${day}/${month}/${today.getFullYear()}`);

// ________________________________________4_______________________________________________________________________________________

// Write a JavaScript program to find 
// which 1st January is being a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) {
    let sunday = new Date(year, 0, 1);
    // new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
    
    if (sunday.getDay() === 0) console.log(`1st January is being a Sunday in ${year}`);
}

// _________________________________________5________________________________________________________________________________

// Write a JavaScript program to calculate number of days left 
// until next Christmas (25/12).

const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);
const oneDay = 1000*60*60*24;

if (today.getMonth() > 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / oneDay)} days left until Christmas!`);

// ________________________________________6_____________________________________________________________________________________________

// Write a JavaScript program 
// to perform a deep comparison between two values to determine if they are equivalent.

// Note: Check if the two values are identical, 
// if they are both Date objects with the same time, 
// using Date.getTime() or if they are both non-object values with an equivalent value (strict comparison). 
// Check if only one value is null or undefined or if their prototypes differ. 
// If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys, 
// then use Array.every() to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.


const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    // kiểm tra xem đối tượng a, b có phải là trường hợp của Date 
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
};
  
console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));
  
// ______________________________________________7___________________________________________________________

// Write a JavaScript program to create tomorrow's date in a string representation.

const tomorrow = (long = false) => {
    let t = new Date();
    t.setDate(t.getDate() + 1);
    const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(
      t.getDate()
    ).padStart(2, '0')}`;
    return !long ? ret : `${ret}T00:00:00`;
  };
  
  console.log(tomorrow());
  console.log(tomorrow(true));
  