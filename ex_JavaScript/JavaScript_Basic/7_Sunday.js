// Write a JavaScript program to find 
// which 1st January is being a Sunday between 2014 and 2050.

for (let year = 2014; year <= 2050; year++) {
    let sunday = new Date(year, 0, 1);
    // new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
    if (sunday.getDay() === 0) console.log(`1st January is being a Sunday in ${year}`);
}