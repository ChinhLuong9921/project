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