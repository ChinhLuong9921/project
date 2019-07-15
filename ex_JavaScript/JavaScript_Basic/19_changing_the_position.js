// Write a JavaScript program 
// to create a new string from a given string changing the position of first and last characters.
// The string length must be greater than or equal to 1.
// chinh---> hhinc

function changeString(string) {
    let charStart = string.charAt(0);
    let charMid = string.substring(1, string.length - 1);
    let charEnd = string.charAt(string.length - 1);
    if (string.length <= 1) {
        return string;
    }

    return charEnd+charMid+charStart;
}

console.log(changeString('chinh'));
console.log(changeString('resourse'));
console.log(changeString('ab'));
console.log(changeString('a'));
console.log(changeString(''));

