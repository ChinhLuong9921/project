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

