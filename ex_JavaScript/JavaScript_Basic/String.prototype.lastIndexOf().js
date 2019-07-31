// Write a JavaScript program 
// to remove all characters from a given string that appear more than once.

function remove_all(str) {
    let arr = str.split('');
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) result.push(arr[i]);
    }

    return result.join('');
}

console.log(remove_all('aaaaabbbbc'));
console.log(remove_all('1234444555'));
