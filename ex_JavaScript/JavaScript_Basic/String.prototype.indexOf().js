// (--------------------------1----------------------)
// Write a JavaScript program 
// to find the number of even values in sequence before the first occurrence of a given number.

// Sample sequence = [1,2,3,4,5,6,7,8]
// Given number: 5
// Output: 2

function count_even_value(arr, num) {
    let count = 0;
    if (arr.includes(num)) {
      for (let i = 0; i < arr.indexOf(num); i++) {
        if (arr[i] % 2 === 0) count++;
      } 
    } else return undefined;
    return count;
}
  
console.log(count_even_value([1, 2, 3, 4, 5, 6], 5));
console.log(count_even_value([2, 3, 5, 7, 8], 8));

// ___________________________________2____________________________________________________________________________________

// Write a JavaScript program 
// to remove all characters from a given string that appear more than once.

function remove_all(str) {
    let arr = str.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) result.push(arr[i]);
    }

    return result.join('');
}

console.log(remove_all('aaaaabbbbc'));
console.log(remove_all('1234444555'));

// _____________________________________3___________________________________________________________________________________________

// Write a JavaScript program to unflatten an object with the paths for keys.

const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
console.log(unflattenObject({ 'a.b.c': 1, d: 1 }));
