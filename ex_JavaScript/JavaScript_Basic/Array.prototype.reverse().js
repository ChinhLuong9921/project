
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

// _________________________________________2__________________________________________________________________________________________

// Write a JavaScript program 
// to execute a provided function once for each array element, 
// starting from the array's last element.

const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

forEachRight([1, 2, 3, 4], val => console.log(val));

// ________________________________________3______________________________________________________________________________________________________

// Write a JavaScript program 
// to implement the Luhn Algorithm used to validate a variety of identification numbers, 
// such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

const luhnCheck = num => {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    sum += lastDigit;
    return sum % 10 === 0;
  };
  
  console.log(luhnCheck('4485275742308327'));
  console.log(luhnCheck(6011329933655299));
  console.log(luhnCheck(123456789));
  