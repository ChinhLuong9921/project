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

