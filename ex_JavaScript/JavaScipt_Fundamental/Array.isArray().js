// (------------------------------------1-----------------------------------)

// Write a JavaScript program to filter out the specified values from an specified array. 
// Return the original array without the filtered values.

const pull = (arr, ...args) => {
    // ...args ---> [value1, value2, ...]
    let argState = Array.isArray(args[0]) ? args[0] : args;
    // kiểm tra xem arg có phải arr hay không
    return arr.filter((v, i) => !argState.includes(v));
}

console.log(pull([1, 2, 3, 4, 5, 5, 5], 5));
console.log(pull(['a', 'b', 'c', 'a', 'c', 'b', 'c', 'b'], 'a', 'b'));

// arguments là một object giống như array nhưng nó không phải array
// arguments có phương thức length nhưng ta không thể gọi được các phương thức của array vì nó không có prototype là array
// vì vậy khi làm việc ta phải chuyển args thành arr thì mới được
// ____________________________________________________________________________________________________________________

function filter_out_in_arr(arr, target) {
    return arr.filter(e => e !== target);
}
  
console.log(filter_out_in_arr([1, 2, 3, 4, 5, 5], 5));
console.log(filter_out_in_arr(['a', 'b', 'c', 'd', 'e'], 'd'));

// _______________________________________2_______________________________________________________________________________________

// Write a JavaScript program to cast the provided value as an array if it's not one.

const castArray = val => (Array.isArray(val) ? val : [val]);
console.log(castArray('w3r')); 
console.log(castArray([100]));

// ________________________________________3______________________________________________________________________________________

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
  