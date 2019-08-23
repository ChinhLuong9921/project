// Write a JavaScript program to converts a specified number to an array of digits.

// Note: Convert the number to a string, using the spread operator (...) to build an array.

const convert = num => [...`${num}`].map(i => parseInt(i));
// đầu tiên chuyển các chữ số thành mảng
// sau đó lọc để lấy ra các chữ số nguyên

console.log(convert(123455));
console.log(convert('12342354jf'));

// _________________________________________2______________________________________________________________________

// Write a JavaScript program to add an ordinal suffix to a number.

const toOrdinalSuffix = num => {
    const int = parseInt(num),
      digits = [int % 10, int % 100],
      ordinals = ['st', 'nd', 'rd', 'th'],
      oPattern = [1, 2, 3, 4],
      tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
      ? int + ordinals[digits[0] - 1]
      : int + ordinals[3];
  };
  
  console.log(toOrdinalSuffix('1')); 
  console.log(toOrdinalSuffix('4')); 
  console.log(toOrdinalSuffix('50')); 
  console.log(toOrdinalSuffix('123'));
  