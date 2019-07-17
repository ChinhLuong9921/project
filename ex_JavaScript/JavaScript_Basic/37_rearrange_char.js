// Write a JavaScript program to convert the letters of a given string in alphabetical order.

function rearrange_char(text) {
    return text.split('').sort().join('');
}

console.log(rearrange_char('chinh'));
console.log(rearrange_char('luonga'));