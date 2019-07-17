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