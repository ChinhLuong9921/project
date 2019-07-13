/*
Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

const today = new Date();
let days = today.getDate();
let months = today.getMonth() + 1;
const years = today.getFullYear();

if (days < 10) {
    days = `0${days}`;
} 
if (months < 10) {
    months = `0${months}`;
}

console.log(`Today: ${days}/${months}/${years}`);