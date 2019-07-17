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