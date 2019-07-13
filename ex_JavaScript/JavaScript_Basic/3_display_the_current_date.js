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