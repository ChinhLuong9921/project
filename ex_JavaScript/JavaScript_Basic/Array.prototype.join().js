// (--------------------------1--------------------)
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

// ____________________________________________2__________________________________________________________

// Write a JavaScript program to convert the letters of a given string in alphabetical order.

function rearrange_char(text) {
    return text.split('').sort().join('');
    // sort(): sắp xếp các value trong mảng theo thứ tự alphabet (chữ cái đầu mỗi value)
}

console.log(rearrange_char('chinh'));
console.log(rearrange_char('luonga'));

// ________________________________________3________________________________________________________________________

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

// ___________________________________4___________________________________________________________________________________

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

// ____________________________________5_________________________________________________________________________________________

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

// ________________________________6________________________________________________________________________________________________________

// Write a JavaScript program to Join all given URL segments together, 
// then normalizes the resulting URL.

const URL_Join = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');

console.log(URL_Join('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'));

// ___________________________________7_____________________________________________________________________________________________________________

// Write a JavaScript program 
// to add special characters to text to print in color in the console (combined with console.log()).

const colorize = (...args) => ({
  black: `\x1b[30m${args.join(' ')}`,
  red: `\x1b[31m${args.join(' ')}`,
  green: `\x1b[32m${args.join(' ')}`,
  yellow: `\x1b[33m${args.join(' ')}`,
  blue: `\x1b[34m${args.join(' ')}`,
  magenta: `\x1b[35m${args.join(' ')}`,
  cyan: `\x1b[36m${args.join(' ')}`,
  white: `\x1b[37m${args.join(' ')}`,
  bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
  bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
  bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
  bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
  bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
  bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
  bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
  bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});
console.log(colorize('foo').red); // 'foo' (red letters)
console.log(colorize('foo', 'bar').bgBlue); // 'foo bar' (blue background)
console.log(colorize(colorize('foo').yellow, colorize('foo').green).bgWhite); // 'foo bar' (first word in yellow letters, second word in green letters, white background for both)

// ________________________________________8_____________________________________________________________________________________________________

// Write a JavaScript program 
// to create a new string with the results of calling a provided function on every character in the calling string.

const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

console.log(mapString('Javascript exercises', c => c.toUpperCase()));

// ____________________________________________9____________________________________________________________________________________

// Write a JavaScript program to unflatten an object with the paths for keys.

const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
console.log(unflattenObject({ 'a.b.c': 1, d: 1 }));

// _______________________________________________10________________________________________________________________________

// Write a JavaScript program to convert a string to snake case.

// Note: Break the string into words and combine them adding _ as a separator, using a regexp.

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

console.log(toSnakeCase('camelCase'));
console.log(toSnakeCase('some text'));
console.log(toSnakeCase('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toSnakeCase('AllThe-small Things'));
console.log(toSnakeCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));

// ______________________________________________11_________________________________________________________________________________________

// Write a JavaScript program to convert a string to kebab case.

// Note: Break the string into words and combine them adding - as a separator, 
// using a regexp.

const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

console.log(toKebabCase('camelCase'));
console.log(toKebabCase('some text'));
console.log(toKebabCase('some-mixed_string With spaces_underscores-and-hyphens'));
console.log(toKebabCase('AllThe-small Things'));
console.log(toKebabCase('IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML'));
