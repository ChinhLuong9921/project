// Write a JavaScript program 
// to find all the possible options to replace the hash in a string 
// (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

// For a string "2*0", the output should be : ["210", "240", "270"]

// Cách này cũng được nhưng tốn bộ nhớ
function divisible_by_3(str) {
  let digits = str.split('');
  // console.log(digits);
  let arr = [];
  const sum = digit => {
    let new_num = digits[0] + digit + digits[2];
    if (new_num % 3 === 0) return new_num;
    return false;
  }
  for (let i = 0; i <= 9; i++) {
    arr.push(sum(i));
  }
  return arr;
}

console.log(divisible_by_3('2x0'));
console.log(divisible_by_3('3x5'));
console.log(divisible_by_3('3x0'));
console.log(divisible_by_3('3x1'));

//__________________________________________________________________________________________________________

function is_divisible_by3(mask_str) {
  let digitSum = 0;
  const left = '0'.charCodeAt();
  const right = '9'.charCodeAt();
  const result = [];
  const mask_data = mask_str.split('');
  let hash_pos = -1;

  for (var i = 0; i < mask_data.length; i++) {
    if (left <= mask_data[i].charCodeAt() && mask_data[i].charCodeAt() <= right) {
      digitSum += mask_data[i].charCodeAt() - left;
    } 
    else hash_pos = i;
  }

  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      mask_data[hash_pos] = String.fromCharCode(left + i);
      result.push(mask_data.join(''));
    }
  }

  return result;
}

console.log(is_divisible_by3("2#0"));
console.log(is_divisible_by3("4#2"));

function findInts(str) {
  let result = [];
  
  for ( let i = 0; i <= 9; i++ ) {
  
  const newStr = str.replace(/#/, i);
  if (parseInt(newStr) % 3 === 0) {
  result.push(newStr);
  }
  
  }
  return result;
  }
  
  console.log(findInts('7#9')); // ["729","759","789"]