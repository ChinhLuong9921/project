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
