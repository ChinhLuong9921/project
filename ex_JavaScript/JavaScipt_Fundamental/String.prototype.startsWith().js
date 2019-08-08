// Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

const extend_hex = short_hex => 
  '#' + 
  short_hex 
    .slice(short_hex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

console.log(extend_hex('#03f'));
console.log(extend_hex('05a'));