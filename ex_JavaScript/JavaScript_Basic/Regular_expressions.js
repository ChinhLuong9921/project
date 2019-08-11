// (-----------1------------)
// Write a JavaScript program
// to check if the characters a and b are separated by exactly 3 places ('ins') 
// (at least once) in a given string.

function a_and_b(text) {
    if (text.length <= 4) return false;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === 'a') {
            if (text.charAt(i + 4) === 'b') {
                return text.substring(i + 1, i + 4) === 'ins';
            } else if (text.charAt(i - 4) === 'b') {
                return text.substring(i - 3, i) === 'ins';
            }
            return false;
        }
    }
    return false;
}

console.log(a_and_b('chinh'));
console.log(a_and_b('asffb'));
console.log(a_and_b('bsffa'));
console.log(a_and_b('abcd'));
console.log(a_and_b('ainsb'));

//_____________________________________________________________________________________________

function ab_Check(str) {
    return (/ainsb/).test(str) || (/binsa/).test(str);
}

console.log(ab_Check("Chainsfbreak"));
console.log(ab_Check("ainsb"));
console.log(ab_Check("abCheck"));

//__________________________________________________________________________________________

function abCheck(str) {
    return (/a...b/).test(str) || (/b...a/).test(str);
    // bao nhiêu dấu chấm bấy nhiêu kí tự
}

console.log(abCheck('a;jfb'));
console.log(abCheck('askjfak'));

// __________________________________2____________________________________________________________________________

// Write a JavaScript program to count the number of vowels of a given string.

function vowel_Count(str){ 
    return str.replace(/[^aeiou]/g, "");
    // thay thế những kí tự không phải nguyên âm thành null
    // trả về toàn bộ các kí tự nguyên âm có trong chuỗi 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));
// ___________________________________3___________________________________________________

// Write a JavaScript program
// to check if a given string contains equal number of p's and t's present.

function t_and_p_check(str) {
    return str.replace(/[^t]/g, '').length === str.replace(/[^p]/g, '').length;
}

console.log(t_and_p_check('ttttpppp'));
console.log(t_and_p_check('ttppp'));
console.log(t_and_p_check('chinh'));

// _________________________________4___________________________________________________________________________________

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

// _______________________________5________________________________________________________________________________________________

// Write a JavaScript program 
// to remove all characters from a given string that appear more than once.

function appear_more_than_one(str) {
    return str.replace(/[\w{2,}]/g, '');
}
  
console.log(appear_more_than_one('aaaabbbbc'));
console.log(appear_more_than_one('abc'));
// ??????????????????????

//______________________________6______________________________________________________________

// Write a JavaScript program 
// to switch case of the minimum possible number of letters 
// to make a given string written in the upper case or in the lower case.

// Fox example "Write" will be 'write' and "PHp" will be "PHP"

function change_string(str) {
    let x = 0; 
    let y = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) x++;
        else y++;
    }
    if (y > x) return str.toLowerCase();
    return str.toUpperCase();
}

console.log(change_string('chinh'));
console.log(change_string('chINH'));

//__________________________________________________________________________________________________

function change_case(str) {
    let check = 0;
    try {
        check = str.match(/[A-Z]/g).length;
    } catch (err) {
        check = 0;
    }
    return (check > (str.length/2)) ? str.toUpperCase() : str.toLowerCase();
}
console.log(change_case("Write"));
console.log(change_case('chinh'));
console.log(change_case('chINH'));
console.log(change_case("PHp"));

// try...catch________________
// Được sử dụng để xử lí những lỗi không biết trước
// Nếu đã biết trước thì nên tự kiểm tra và thay đổi

//__________________________________________________________

function change_case1(str) {
    const match = str.match(/[A-Z]/g);
    if (match === null) return str;
    return (match.length > str.length / 2) ? str.toUpperCase() : str.toLowerCase();
}
console.log(change_case1('chinh'));

//__________________________________7___________________________________________________

// Write a JavaScript program 
// to check whether a given string represents a correct sentence or not. 
// A string is considered correct sentence 
// if it starts with the capital letter and ends with a full stop (.).

function check_sentence(sentence) {
    return (/^[A-Z]/.test(sentence) && /[.]$/.test(sentence));
}
  
console.log(check_sentence(
    'Cong hoa xa hoi chu nghia viet nam.\nDoc lap tu do hanh phuc.'
));
console.log(check_sentence(
    'Cong hoa xa hoi chu nghia viet nam\nDoc lap tu do hanh phuc.'
));

//___________________________________8__________________________________________________________

// Write a JavaScript program 
// to replace the first digit in a string (should contains at least digit) with $ character.

function replace_digit(str) {
    return str.replace(/[0-9]/, '$');
  }
  
  console.log(replace_digit('abc1'));
  console.log(replace_digit('alskdfj99'));

//____________________________________9___________________________________________________________
// Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

function simplify_path(main_path) {
    const parts = main_path.split('/');
    const new_path = [];
    let length = 0;
  
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part === '.' || part === '' || part === '..') {
        if (part === '..' && length > 0) length--;
        continue;
      }
      new_path[length++] = part;
    }
  
    if (length === 0) return '/';
    
    let result = '';
    for (let i = 0; i < length; i++) {
      result += `/${new_path[i]}`;
    }
  
    return result;
}

console.log(simplify_path('home/var/./www/../html//sql'));

//_______________________________________________________________________________________________
  
function simplifyPath(path) {
    if (path === '') return '/';
    let simplifiedPath = [];
    let dirs = path.match(/(\w+|\.\.|\.)+/g);
    if (dirs) {
        dirs.forEach(d => {
            if (/\.\./.test(d)) {
                if (simplifiedPath.length) simplifiedPath.pop();
                // xóa www trong simplifiedPath
            } else if (/[^\.]/.test(d)) simplifiedPath.push(d);
        });
        if (simplifiedPath.length === 0) return '/';
    }
    return ['/', simplifiedPath.join('/')].join('');
}
  
console.log(simplifyPath('home/var/./www/../html/sql'));
// '.': biểu thị thư mục hiện thời
// '..': biểu thị thư mục mẹ của thư mục hiện thời

//__________________________________10_____________________________________________________________________

// Write a JavaScript program to break an address of an url and put it's part into an array.

// Note: url structure : ://.org[/] and there may be no part in the address.
// https://www.w3resource.com/javascript-exercise/
//----> ['https', 'www.w3resource.com', 'javascript-exercise'];

function break_an_address(path) {
    if (path === '') return '/';
    return path.match(/(\w+\.*\-*:*)+/g);
}

console.log(break_an_address('https://www.w3resource.com/javascript-exercise'));

//_____________________________________________________________________________________________

// Nodejs
const URL = require('url');
function break_url(url) {
    let trim = URL.parse(url);
    return [trim.protocol, loc.hostname, loc.pathname];
}

console.log(break_url('https://www.w3resource.com/javascript-exercise'));
//?????????????????????????????????????

// ___________________________________________11______________________________________________________________________________________________________________

// Write a JavaScript program 
// to retrieve a set of properties indicated by the given selectors from an object.

const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      // ??????????????????
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a')); 

// _____________________________________12___________________________________________________________________________________________________________

// Write a JavaScript program 
// to get an object containing the parameters of the current URL. 

const get_URL_Parameters = url =>
(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
  // (=(...)): ?????????
  (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
  {}
);

console.log(get_URL_Parameters('http://url.com/page?name=Adam&surname=Smith')); 
console.log(get_URL_Parameters('google.com'));
console.log(get_URL_Parameters('https://www.w3resource.com'));
// ??????????????????