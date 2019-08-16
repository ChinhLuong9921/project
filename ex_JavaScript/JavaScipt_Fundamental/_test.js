
// // Write a JavaScript program 
// // to replace all but the last number of characters with the specified mask character.

// const mask = (cc, num = 4, mask = '*') =>
//   ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

// console.log(mask(1234567890)); 
// console.log(mask(1234567890, 3));
// console.log(mask(1234567890, -4, '$'));


const mask = (cc, num = 4, mask = '*') => 
  ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);