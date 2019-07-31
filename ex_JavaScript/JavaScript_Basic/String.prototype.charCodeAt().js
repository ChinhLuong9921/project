// (-------------------1---------------------------)
// Write a JavaScript program
// to replace every character in a given string with the character following it in the alphabet.

function letterChanges(text) {
    let str = text.split('');
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case ' ':
                break;
            case 'z':
                str[i] = 'a';
                break;
            case 'Z':
                str[i] = 'A';
                break;
            default:
                str[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
        }
        
        switch (str[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
}

console.log(letterChanges('luong'));
console.log(letterChanges('dinh'));
console.log(letterChanges('chinh'));
console.log(letterChanges('20'));

//___________________________________2______________________________________________________________________

// Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
// Note: ‘a’ will be replace by ‘b’ or ‘z’ would be replaced by ‘a’.

function alphabet_char_Shift(str) {
    var all_chars = str.split("");
    for(var i = 0; i < all_chars.length; i++) {
      var n = all_chars[i].charCodeAt() - 'a'.charCodeAt();
      //console.log(n);
      n = (n + 1) % 26;
      // giới hạn số lượng kí tự chỉ trong bảng alphabet 26 chữ cái

      all_chars[i] = String.fromCharCode(n + 'a'.charCodeAt());
      // số kí tự của bảng alphabet trong utf-16
      
    }
    return all_chars.join("");
}
  
console.log(alphabet_char_Shift("abcdxyz"));

// __________________________________3___________________________________________________________________________________

// Write a JavaScript program 
// to find all the possible options to replace the hash in a string 
// (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

// For a string "2*0", the output should be : ["210", "240", "270"]

function divisible_by_3(str) {
    let result = [];
    for (let i = 0; i <= 9; i++) {
        const newStr = str.replace(/x/, i);
        if (parseInt(newStr) % 3 === 0) result.push(newStr);
    }
    return result;
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
