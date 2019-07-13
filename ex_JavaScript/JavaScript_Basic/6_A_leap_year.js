// Write a JavaScript program to determine whether a given year is a leap year 
// in the Gregorian calendar.
// divisible by 4 
// not divisible by 100

const today = new Date();
let currentYear = today.getFullYear();

if (currentYear % 4 === 0 || currentYear % 400 === 0) {
    currentYear = `${currentYear} and a leap year`;
}

console.log(currentYear);

//_______________________________________________________________________
function leapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(2016));