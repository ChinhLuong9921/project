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

// tự nghĩ*****************************************************
