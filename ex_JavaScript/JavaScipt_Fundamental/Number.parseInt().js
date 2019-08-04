// Write a JavaScript program to converts a specified number to an array of digits.

// Note: Convert the number to a string, using the spread operator (...) to build an array.

const convert = num => [...`${num}`].map(i => parseInt(i));
// đầu tiên chuyển các chữ số thành mảng
// sau đó lọc để lấy ra các chữ số nguyên

console.log(convert(123455));
console.log(convert('12342354jf'));