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

// _________________________________________2______________________________________________________________________________

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

// _________________________________________3_______________________________________________________________________________________

// Write a JavaScript program to find 
// which 1st January is being a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) {
    let sunday = new Date(year, 0, 1);
    // new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
    
    if (sunday.getDay() === 0) console.log(`1st January is being a Sunday in ${year}`);
}

// _________________________________________4________________________________________________________________________________

// Write a JavaScript program to calculate number of days left 
// until next Christmas (25/12).

const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);
const oneDay = 1000*60*60*24;

if (today.getMonth() > 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}

console.log(`${Math.ceil((cmas.getTime() - today.getTime()) / oneDay)} days left until Christmas!`);