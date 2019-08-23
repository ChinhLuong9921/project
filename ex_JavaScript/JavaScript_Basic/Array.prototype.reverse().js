
// Write a JavaScript program to reverse a given string.
const string_reverse = str => str.split('').reverse().join('');

console.log(string_reverse("dinhChinh"));
console.log(string_reverse("www"));
console.log(string_reverse("JavaScript"));
// split(): ngăn cách các kí tự trong chuỗi tạo thành mảng
// reverse(): đảo ngược mảng
// join(''): gộp mảng thành chuỗi (không có ngăn cách phẩy như toString())

//_____________________________________________________________________________________________
// Recursion

const reverse_3 = str => {
  if (str === '') return '';
  else return reverse_3(str.substr(1)) + str.charAt(0);
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
forEachRight([1, 2, 4, 4, 4], val => console.log(val * 2));
// ________________________________________3______________________________________________________________________________________________________

// Write a JavaScript program 
// to implement the Luhn Algorithm used to validate a variety of identification numbers, 
// such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
// Thuật toán Luhn trong việc kiểm tra thẻ:
// lấy lần lượt các số ở vị trí lẻ nếu chiều dài là chắn
// or các số ở vị trí chẵn nếu chiều dài là lẻ
// *2 rồi cộng:
// 5 4 3 4 8 4 3 4 2 9 0 0 1 0 3 3
// x2  x2  x2  x2  x2  x2  x2  x2
// —————————————
// 10 6 16 6 4 0 2 6
// – tính tổng: 
// (1+0) + 4 + (6) + 4 + (1+6) + 4 + (6) + 4 + (4) + 9 + (0) + 0 + (2) + 0 + (6) + 3 = 60
// sum % 10 === 0 => true;

const luhnCheck = num => {
  let arr = (num + '')
  // chuyển num ---> str
        .split('')
        .reverse()
        .map(x => parseInt(x));
  console.log(arr);
  let lastDigit = arr.splice(0, 1)[0];
  console.log(lastDigit);
  let sum = arr.reduce((acc, val, i) => 
    (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
    // (val * 2) % 9: 18%9 
  sum += lastDigit;
  console.log(sum);
  return sum % 10 === 0;
}

console.log(luhnCheck('4485275742308327'));
console.log(luhnCheck(6011329933655299));
console.log(luhnCheck(123456789));
console.log(luhnCheck('1924'));
console.log(luhnCheck('1921'));
// ???????????????

// ____________________________________________4___________________________________________________________________

// Write a JavaScript program 
// to get removed elements from the end of an given array until the passed function returns true.
 
const takeRightWhile = (arr, func) => {
  for (let i of arr.reverse().keys())
    if (func(arr[i])) return arr.reverse().slice(arr.length - i, arr.length);
  return arr;
};

console.log(takeRightWhile([1, 2, 3, 4], n => n < 3));
