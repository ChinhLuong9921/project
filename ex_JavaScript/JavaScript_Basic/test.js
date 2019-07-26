// Write a JavaScript program 
// to remove all characters from a given string that appear more than once.

function appear_more_than_one(str) {
  return str.replace(/[\w{2,}]/g, '');
}

console.log(appear_more_than_one('aaaabbbbc'));
console.log(appear_more_than_one('abc'));