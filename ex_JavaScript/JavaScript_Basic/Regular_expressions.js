// (-----------1------------)
// Write a JavaScript program
// to check if the characters a and b are separated by exactly 3 places ('ins') 
// (at least once) in a given string.

const ab_Check = str => (/ainsb/).test(str) || (/binsa/).test(str);

console.log(ab_Check("Chainsfbreak"));
console.log(ab_Check("aintsb"));
console.log(ab_Check("abCheck"));

//__________________________________________________________________________________________

const abCheck = str => (/a...b/).test(str) || (/b...a/).test(str);
// bao nhiêu dấu chấm bấy nhiêu kí tự

console.log(abCheck('a;jfb'));
console.log(abCheck('askjfak'));

// __________________________________2____________________________________________________________________________

// Write a JavaScript program to count the number of vowels of a given string.

const vowel_Count = str => str.replace(/[^aeiou]/g, '');
// thay thế kí tự không phải nguyên âm thành null
// trả về toàn bộ các kí tự nguyên trong chuỗi
// g: tìm hết trong chuỗi
// nếu không có g thì sẽ chỉ thay thế kí tự nguyên âm đầu tiên

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));

// ___________________________________3___________________________________________________

// Write a JavaScript program
// to check if a given string contains equal number of p's and t's present.

const t_and_p_check = str => 
  str.replace(/[^t]/g, '').length === str.replace(/[^p]/g, '').length;

console.log(t_and_p_check('ttttpppp'));
console.log(t_and_p_check('ttppp'));
console.log(t_and_p_check('chinh'));

// _________________________________4___________________________________________________________________________________

// Write a JavaScript program 
// to find all the possible options to replace the hash in a string 
// (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.

// For a string "2*0", the output should be : ["210", "240", "270"]

const divisible_by_3 = str => {
    let result = [];
    for (let i = 0; i <= 9; i++) {
      const newStr = str.replace(/x/, i);
      if (parseInt(newStr) % 3 === 0) result.push(newStr);
    }
    return result;
};
  
console.log(divisible_by_3('2x0'));
console.log(divisible_by_3('3x5'));
console.log(divisible_by_3('3x0'));
console.log(divisible_by_3('3x1'));
  
//______________________________5______________________________________________________________

// Write a JavaScript program 
// to switch case of the minimum possible number of letters 
// to make a given string written in the upper case or in the lower case.

// Fox example "Write" will be 'write' and "PHp" will be "PHP"

const change_case = str => {
    const match = str.match(/[A-Z]/g);
    if (match === null) return str;
    return (match.length > str.length/2) ? str.toUpperCase() : str.toLowerCase();
};
  
console.log(change_case("Write"));
console.log(change_case('chinh'));
console.log(change_case('chINH'));
console.log(change_case("PHp"));
  
//__________________________________6___________________________________________________

// Write a JavaScript program 
// to check whether a given string represents a correct sentence or not. 
// A string is considered correct sentence 
// if it starts with the capital letter and ends with a full stop (.).

const check_sentence = sentence => 
  /^[A-Z]/.test(sentence) && /[.]$/.test(sentence);

console.log(check_sentence(
    'Cong hoa xa hoi chu nghia viet nam.\nDoc lap tu do hanh phuc.'
));
console.log(check_sentence(
    'Cong hoa xa hoi chu nghia viet nam\nDoc lap tu do hanh phuc.'
));

//___________________________________7__________________________________________________________

// Write a JavaScript program 
// to replace the first digit in a string (should contains at least digit) with $ character.
const replace_digit = str => str.replace(/[0-9]/g, '$');

console.log(replace_digit('abc1'));
console.log(replace_digit('alskdfj99'));

//____________________________________8___________________________________________________________
// Write a JavaScript program to simplify a given absolute path for a file in Unix-style.

const simplifiedPath = path => {
    if (path === '') return '/';
    let simplifiedPath = [];
    let dirs = path.match(/(\w+|\.\.|\.)+/g);
    if (dirs) {
      dirs.forEach(d => {
        if (/\.\./.test(d)) {
          if (simplifiedPath.length) simplifiedPath.pop();
          // sau khi simplifiedPath có chiều dài 
          // ngay sau khi gặp 'www' có thể d sẽ chạy tới '..'
          // vì thể ta xóa kí tự 'www' khi ngay đằng sau nó là '..'
        } else if (/[^\.]/.test(d)) simplifiedPath.push(d);
      });
      if (simplifiedPath.length === 0) return '/';
    }
    return ['/', simplifiedPath.join('/')].join('');
};
   
console.log(simplifiedPath('home/var/./www/../html/sql'));
// '.': biểu thị thư mục hiện thời
// '..': biểu thị thư mục mẹ của thư mục hiện thời
  
//__________________________________9_____________________________________________________________________

// Write a JavaScript program to break an address of an url and put it's part into an array.

// Note: url structure : ://.org[/] and there may be no part in the address.
// https://www.w3resource.com/javascript-exercise/
//----> ['https', 'www.w3resource.com', 'javascript-exercise'];

const break_an_address = path => {
    if (path === '') return '/';
    return path.match(/(\w+\.*\-*\:*)+/g);
};
  
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

// ___________________________________________10______________________________________________________________________________________________________________

// Write a JavaScript program 
// to retrieve a set of properties indicated by the given selectors from an object.

const get = (from, ...selectors) => 
  [...selectors].map(s => 
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      // đổi [[something]] ---> .something.
      .split('.')
      // tách chuỗi truyền vào: 'selector.to.val'
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
      // ??????????
      );

const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test'}] };

console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a')); 

// _____________________________________11___________________________________________________________________________________________________________

// Write a JavaScript program 
// to get an object containing the parameters of the current URL. 

const get_URL_Parameters = url =>
(url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
  // return: 'name=Adam'
  // group 1 ('()'): 'name'
  // group 2: '=Adam'
  // group 3(bên trong, đằng sau dấu '='): Adam
  (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
  // lấy chuỗi trước dấu '=' làm key
  // chuỗi sau dấu '=' làm value
  {}
);

console.log(get_URL_Parameters('http://url.com/page?name=Adam&surname=Smith')); 
console.log(get_URL_Parameters('google.com'));
console.log(get_URL_Parameters('https://www.w3resource.com'));

// __________________________________12___________________________________________________________________________________________________________________________

// Write a JavaScript program to Join all given URL segments together, 
// then normalizes the resulting URL.

const URL_Join = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    // ???????????
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');
    // ????????????

console.log(URL_Join('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));

// ________________________________________13_______________________________________________________________________________

// Write a JavaScript program to clone a given regular expression.

const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);
const regExp = /lorem ipsum/gi;
console.log(regExp);
const regExp2 = cloneRegExp(regExp);
console.log(regExp2);

// ________________________________________14_______________________________________________________________________________________

// Write a JavaScript program 
// to  detect if the website is being opened in a mobile device or a desktop/laptop.

const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
console.log(detectDeviceType()); // "Mobile" or "Desktop"

// __________________________________________15____________________________________________________________________________________________

// Write a JavaScript program 
// to replace all but the last number of characters with the specified mask character.

const mask = (cc, num = 4, mask = '*') =>
  ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);
//   /./g: khớp bất cứ kí tự đơn nào ngoại trừ kí tự xuống dòng

console.log(mask(1234567890)); 
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, '$'));

// ____________________________________________16_____________________________________________________________________________

// Write a JavaScript program to convert a given string into an array of words.

const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
console.log(words('I love javaScript!!')); 
console.log(words('python, java, php'));
