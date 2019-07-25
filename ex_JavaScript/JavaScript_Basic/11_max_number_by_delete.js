// Write a JavaScript program 
// to find the maximum number from a given positive integer 
// by deleting exactly one digit of the given number.

function digit_delete(num) {
    let result = 0;
    const arr = [];
    while (num) {
      arr.push(num % 10);
      // đẩy ngược kết hợp với vòng lặp ngược thứ 2 sẽ tạo ra số thuận với đối số nhập vào
      num = Math.floor(num / 10);
    }
    for (let i = 0; i < arr.length; i++) {
      let n = 0;
      for (let j = arr.length - 1; j >= 0; j--) {
        if (i !== j) n = n * 10 + arr[j];
        // 2
        // 23
        // 234
        //.....
      }
      result = Math.max(n, result);
    }
    return result;
  }
  
  console.log(digit_delete(1234));
  console.log(digit_delete(98789));
  console.log(digit_delete(1909));
  console.log(digit_delete(199199));
  