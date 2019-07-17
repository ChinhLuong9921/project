// Write a JavaScript program
// to replace every character in a given string with the character following it in the alphabet.

function letterChanges(text) {
    let str = text.split('');
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case ' ':
                break;
            case 'z':
                str[i] = 'a';
                break;
            case 'Z':
                str[i] = 'A';
                break;
            default:
                str[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
        }
        
        switch (str[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
}

console.log(letterChanges('luong'));
console.log(letterChanges('dinh'));
console.log(letterChanges('chinh'));
console.log(letterChanges('20'));