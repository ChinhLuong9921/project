// Write a JavaScript program 
// to find the number of times to replace a given number 
// with the sum of its digits until it convert to a single digit number.
// 123 => 1+2+3=6 => convert 1
// 156 => 1+5+6=12 => 1+2=3 => convert 2

// tính theo quy tắc cộng dồn từng val trong mảng
// dẫn tới convert nhiều lần
function convert_number(num) {
    let convert = 0;
    const arr = [];
    let sum = 0;
    while (num) {
      arr.push(num % 10);
      num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (sum > 10) {
        sum = sum%10 + Math.floor(sum/10);
        convert++;
      }
    }
    convert++;
    return convert;
  }
  
  console.log(convert_number(123));
  console.log(convert_number(12345));
  console.log(convert_number(9999999999));
  console.log(convert_number(10000000000));
  console.log(convert_number(999));
  
  
  // tính tổng toàn bộ các val rồi mới convert
  // convert ít lần
  function digit_to_one(num) {
    const digitSum = num => {
      let digit_sum = 0;
      while (num) {
        digit_sum += num % 10;
        num = Math.floor(num / 10);
      }
      return digit_sum;
    }
  
    let result = 0;
    while (num >= 10) {
      result++;
      num = digitSum(num);
    }
    return result;
  }
  
  console.log(digit_to_one(123))
  console.log(digit_to_one(12345));
  console.log(digit_to_one(9999999999));
  console.log(digit_to_one(100000000000));
  console.log(digit_to_one(999));
  