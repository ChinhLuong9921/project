// Write a JavaScript program to find the number of even digits in a given integer.

function even_digit(num) {
    let arr = [];
    while (num) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) count++;
    }
    return count;
}
  
console.log(even_digit(1230));
console.log(even_digit(9999));
console.log(even_digit(2000));
  
//_________________________________________________________________________________________

function even_digits(num) {
    let ctr = 0;
    while (num) {
      ctr += num % 2 === 0;
      // true: được tính là 1 nếu quy đổi ra number
      // false: quy đổi ra 0
      num = Math.floor(num / 10);
    }
    return ctr;
}
  
console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));


  