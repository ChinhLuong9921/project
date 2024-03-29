// (-----------------------1-------------------------)
// Write a JavaScript program to reverse a given string.

function string_reverse(str) {
    return str.split("").reverse().join("");
}

console.log(string_reverse("dinhChinh"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));
// split(): ngăn cách các kí tự trong chuỗi tạo thành mảng
// reverse(): đảo ngược mảng
// join(''): gộp mảng thành chuỗi (không có ngăn cách phẩy như toString())

//__________________________________________________________________________________________

function reverse_2(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) newString += string[i];
    return newString;
}

console.log(reverse_2("dinhChinh"));
console.log(reverse_2("www"));
console.log(reverse_2("JavaScript"));

//_____________________________________________________________________________________________
// Recursion

function reverse_3(string) {
    if (string === '') return '';
    else return reverse_3(string.substr(1)) + string.charAt(0);
}

console.log(reverse_3("dinhChinh"));
console.log(reverse_3("www"));
console.log(reverse_3("JavaScript"));

// ______________________________________2____________________________________________________________________

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
