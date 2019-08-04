// (------------------------------------1-------------------------------------------)
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

// ________________________________________________2__________________________________________________________________________________

// Write a JavaScript program 
// to extract out the values at the specified values from an specified array.


function extract_to_arr(arr, ...args) {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    return arr.filter(v => argState.includes(v));
}

console.log(extract_to_arr([1, 2, 3, 4, 5], 1, 2));
console.log(extract_to_arr([1, 2, 3, 4, 5], 6, 7));

