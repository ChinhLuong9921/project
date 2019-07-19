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

//_________________________________________________________________________________________________________

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
  
  console.log(alphabet_char_Shift("abcdxyz"))
  
