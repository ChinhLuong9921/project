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
