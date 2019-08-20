// (------------------------1--------------------)
// Write a JavaScript program
// to create a new string of specified copies (positive number) of a given string.

function string_repeat(str, n) {
    if (n < 0) return false;
    else return str.repeat(n);
}

console.log(string_repeat('chinh', 5));
console.log(string_repeat('chinh', -2));

// ____________________________________2____________________________________________________

// Write a JavaScript program
// to create a new string of 4 copies of the last 3 characters of a given original string.
// The length of the given string must be 3 and above.

function four_copies(str, n) {
    if (n < 0) return false;
    if (str.length < 3) return false;
    else return str.substring(str.length - 3).repeat(n);
}

console.log(four_copies('chinh', 5));
console.log(four_copies('chih', -2));

// _________________________________________3_______________________________________________________________________________________

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
