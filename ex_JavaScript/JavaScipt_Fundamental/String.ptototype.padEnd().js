// Write a JavaScript program 
// to pad a string on both sides with the specified character, if it's shorter than the specified length.

const pad = (str, length, char = ' ') => 
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

console.log(pad('chinh', 12, '*'));
console.log(pad('luong', 20, '*'));