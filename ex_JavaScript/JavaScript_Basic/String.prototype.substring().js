// (----------------------------1--------------------------)
/*
Write a JavaScript program to rotate the string 'w3resource' in right direction 
by periodically removing one letter from the end of the string 
and attaching it to the front.
*/

function animate_string(id) {
    let element = document.getElementById(id);
    let textNode = element.childNodes[0];
    let text = textNode.data;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 200);
}
//?????????????????????????????????????????????????

// ________________________________________2____________________________________________________________________________________________________

// Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

function checkString(string) {
    if (string === null || string === undefined || string.substring(0, 2) === 'Py') {
      return string;
    }
    return `Py${string}`;
}

console.log(checkString('Python'));
console.log(checkString('chinh'));
console.log(checkString(''));

// _______________________________________3______________________________________________________________________________________________________________

// Write a JavaScript program to remove a character at the specified position of a given string 
// and return the new string.
// removeChar('chinh', 3)---> 'chih'

function removeChar(str, x) {
    let part1 = str.substring(0, x);
    let part2 = str.substring(x+1, str.length);
    return part1 + part2;
}

console.log(removeChar("Python",0));
console.log(removeChar("Python",3));
console.log(removeChar("Python",5));

// _______________________________________4__________________________________________________________________________________________________________

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

// _____________________________________5_____________________________________________________________________________________________________________

// Write a JavaScript program to check 
// if a string "Script" presents at 5th (index 4) position in a given string,
// if "Script" presents in the string return the string 
// without "Script" otherwise return the original one.
// JavaScript ---> Java
// JavaScrip .---> JavaScrip

function _Script(string) {
    if (string.length < 4) return undefined;
    if (string.substring(4, 10) === 'Script') {
        return string.substring(0, 4) + string.substring(10, string.length);
    } else return string;
}

console.log(_Script('chinh'));
console.log(_Script('JavaScript'));
console.log(_Script(''));
console.log(_Script('CoffeeScript'));
console.log(_Script('JavaScripttutorial'));

// _____________________________________6_____________________________________________________________________________________________________________

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

// ________________________________________7_______________________________________________________________________

// Write a JavaScript program to swap two halves of a given array of integers of even length.

function swap_two_halves(arr) {
    if (arr.length % 2 === 0) {
        arr = arr.join('');
        let arr1 = arr.substring(0, arr.length/2).split('');
        let arr2 = arr.substring(arr.length/2).split('');
        
        return [...arr2, ...arr1];
    }
    return 'array has not even length';
}

console.log(swap_two_halves([1, 2, 3, 4, 5, 6]));
console.log(swap_two_halves([1, 2, 3, 4, 5]));