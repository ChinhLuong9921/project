// ___________________________________1____________________________________________________________________________________________________

// Write a JavaScript program 
// to find the number which appears most in a given array of integers.

function find_num_appears(arr) {
    let counter = {};
    arr.forEach((val) => counter[val] = (counter[val] || 0) + 1);
    return counter;
}

console.log(find_num_appears([1, 2, 3, 5, 67, 7, 8, 99, 1, 2, 3, 55, 67]));

// ____________________________________2__________________________________________________________________________________________

// Write a JavaScript program to create a deep clone of an object.

const deepClone = obj => {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
      key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
console.log(b)

// ____________________________________3_______________________________________________________________________________________________

// Write a JavaScript program 
// to execute a provided function once for each array element, 
// starting from the array's last element.

const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

forEachRight([1, 2, 3, 4], val => console.log(val));

// ____________________________________4__________________________________________________________________________________________________

// Write a JavaScript program to iterate over all own properties of an object, 
// running a callback for each one.

const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1


//____________________________________5___________________________________________________________
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
