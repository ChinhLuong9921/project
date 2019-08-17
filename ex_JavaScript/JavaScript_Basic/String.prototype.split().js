// (----------------------------1----------------------)
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

// ______________________________________2__________________________________________________________________

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

//________________________________________3_________________________________________________________________

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

// ________________________________________4____________________________________________________________________________

// Write a JavaScript program to capitalize the first letter of each word of a given string.

function firstLetter(sentence) {
    let text = sentence.split(' ');
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].substr(1);
        //console.log(text[i].charAt(0));
    }
    return text.join(' ');
}

console.log(firstLetter('luong dinh chinh'));

// ________________________________________5_______________________________________________________________________________________

// Write a JavaScript program to convert the letters of a given string in alphabetical order.

function rearrange_char(text) {
    return text.split('').sort().join('');
    // sort(): sắp xếp các value trong mảng theo thứ tự alphabet (chữ cái đầu mỗi value)
}

console.log(rearrange_char('chinh'));
console.log(rearrange_char('luonga'));

// __________________________________6_____________________________________________________________________________________________

// Write a JavaScript program 
// to check whether it is possible 
// to rearrange characters of a given string in such way 
// that it will become equal to another given string.

function rearrangement_characters(str1, str2) {
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    let result = true;
  
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (arr1[i] !== arr2[i]) result = false; 
    }
    return result;
}
  
console.log(rearrangement_characters("xyz", "zyx"));
console.log(rearrangement_characters("xyz", "zyp"));
console.log(rearrangement_characters('chih', 'chinh'));
console.log(rearrangement_characters('cinh', 'nihc'));
  
// ______________________________________7____________________________________________________________________________________

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

// _____________________________________8_________________________________________________________________________________________

// Write a JavaScript program to swap two halves of a given array of integers of even length.

function swap_two_halves(arr) {
    if (arr.length % 2 === 0) {
        arr = arr.join('');
        let arr1 = arr.substring(0, arr.length/2).split('');
        let arr2 = arr.substring(arr.length/2).split('');
        
        return [...arr2, ...arr1];
    }
    return 'array has not even length';
}

console.log(swap_two_halves([1, 2, 3, 4, 5, 6]));
console.log(swap_two_halves([1, 2, 3, 4, 5]));

// ______________________________________9________________________________________________________________________________________________________

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

// ______________________________________10_______________________________________________________________________________________________________

// Write a JavaScript program 
// to create a new string with the results of calling a provided function on every character in the calling string.

const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

console.log(mapString('Javascript exercises', c => c.toUpperCase()));

// ________________________________________11_________________________________________________________________________________________

// Write a JavaScript program to hash an given  input string into a whole number.

const sdbm = str => {
    let arr = str.split('');
    return arr.reduce(
      (hashCode, currentVal) =>
        (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
      0
    );
};
console.log(sdbm('w3r'));
console.log(sdbm('name'));
  
// ___________________________________________12______________________________________________________________________________

// Write a JavaScript program to convert a given string into an array of words.

const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
console.log(words('I love javaScript!!')); 
console.log(words('python, java, php'));
