// Write a JavaScript program
// to create a new string of specified copies (positive number) of a given string.

function string_repeat(str, n) {
    if (n < 0) return false;
    else return str.repeat(n);
}

console.log(string_repeat('chinh', 5));
console.log(string_repeat('chinh', -2));

// ________________________________________________________________________________________

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


// String.prototype.repeat()_____________________________________________________________