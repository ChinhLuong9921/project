// (-----------------------------------1--------------------------)
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

// _____________________________________2____________________________________________________________________________

// Write a JavaScript program
// to check a given string contains 2 to 4 numbers of a specified character.

function filterA(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === 'a') {
            count++;
        }
    }
    return (count >= 2 && count <= 4);
}

console.log(filterA('JavaScript'));
console.log(filterA('ba'));
console.log(filterA('chinh'));
console.log(filterA('aaaa'));
console.log(filterA('aaaaaaa'));

// _____________________________________3_______________________________________________________________________________

// Write a JavaScript program to capitalize the first letter of each word of a given string.

function firstLetter(sentence) {
    let text = sentence.split(' ');
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].substr(1);
        //console.log(text[i].charAt(0));
    }
    return text.join(' ');
}

console.log(firstLetter('luong dinh chinh'));

// ___________________________________4___________________________________________________________________________________

// Write a JavaScript program
// to check if the characters a and b are separated by exactly 3 places ('ins') 
// (at least once) in a given string.

function a_and_b(text) {
    if (text.length <= 4) return false;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === 'a') {
            if (text.charAt(i + 4) === 'b') {
                return text.substring(i + 1, i + 4) === 'ins';
            } else if (text.charAt(i - 4) === 'b') {
                return text.substring(i - 3, i) === 'ins';
            }
            return false;
        }
    }
    return false;
}

console.log(a_and_b('chinh'));
console.log(a_and_b('asffb'));
console.log(a_and_b('bsffa'));
console.log(a_and_b('abcd'));
console.log(a_and_b('ainsb'));

//_____________________________________________________________________________________________

function ab_Check(str) {
    return (/ainsb/).test(str) || (/binsa/).test(str);
}

console.log(ab_Check("Chainsfbreak"));
console.log(ab_Check("ainsb"));
console.log(ab_Check("abCheck"));

//__________________________________________________________________________________________

function abCheck(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
    // bao nhiêu dấu chấm bấy nhiêu kí tự
}

console.log(abCheck('a;jfb'));
console.log(abCheck('askjfak'));
