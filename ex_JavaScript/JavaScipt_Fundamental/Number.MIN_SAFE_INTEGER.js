// Write a JavaScript program to convert a value to a safe integer.

const to_Safe_Integer = num => 
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

console.log(to_Safe_Integer('32332'));
console.log(to_Safe_Integer('12.34353456'));
console.log(to_Safe_Integer(Infinity));
console.log(Infinity);