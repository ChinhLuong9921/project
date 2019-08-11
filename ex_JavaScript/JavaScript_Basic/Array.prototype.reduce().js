// (--------------------------1-----------------------)

const sum = (() => {
    return function sum(x, y, z) {
      const args = [x, y, z];
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  
  console.log(sum(1, 2, 3));

// ____________________________________2________________________________________________________________________________________

// Write a JavaScript program to create an array of prefix sums of the given array.

// In computer science, the prefix sum, cumulative sum, inclusive scan, 
// or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., 
// the sums of prefixes of the input sequence:
// y0 = x0	
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// ...

function prefix_sum(arr) {
    const new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        new_arr[i] = 0;
        for (let j = 0; j < i+1; j++) {
        // j < i+1: để cộng dồn vào số có vị trí hiện tại tạo ra số mới cùng vị trí thay thế nó
            new_arr[i] += arr[j];
        }
    }
    return new_arr;
}

console.log(prefix_sum([1, 2, 3, 4, 5]));
console.log(prefix_sum(1, 2, -3, 4, -5, 6));

//__________________________________________________________________________________________________________

const accumulate = (iterable, func = (x, y) => x + y) => {
  return iterable.reduce((acc, c) => {
    acc.push(acc.length > 0 ? func(acc[acc.length - 1], c) : c);
    // acc[acc.length - 1] lấy số cuối cùng trong mảng acc cộng với value tiếp theo của mảng iterable
    return acc;
  }, []);
};

console.log(accumulate([1, 2, 3, 4, 5]));
console.log(accumulate([11, 22, 33, 4, 4, 55, 78]));


// _____________________________3________________________________________________________________________________________

// Write a JavaScript program to get the sum of an given array, 
// after mapping each element to a value using the provided function.

const sum_by = (arr, fn) => 
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0);

console.log(sum_by([{n: 1}, {n: 2}, {n: 5}, {n: 10}], o => o.n));

// __________________________________4____________________________________________________________________________________________

// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
 
const omit = (obj, arr) => 
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    // lọc ra các phần tử không có trong arr
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
    // gán các key-value pair cho object acc mới
    // ((...), acc) syntax để truyền vào object??

console.log(omit({a: 1, b: 2, c: 3}, ['a']));
console.log(omit({a: 'abc', abc: 'abcd', abcd: 'abcde'}, ['a', 'abcd']));
// ?????????????????

// ______________________________________5________________________________________________________________________________________________

// Write a JavaScript program to create an object from the given key-value pairs.

const object_From_Pairs = arr => 
  arr.reduce((acc, val) => ((acc[val[0]] = val[1]), acc), {});
  // ((...), acc) syntax để truyền vào object??

console.log(object_From_Pairs([['a', 1], ['b', 2], ['c', 3]]));
// ?????????????

// _______________________________________6________________________________________________________________________________________________________

// Write a JavaScript program 
// to split values into two groups, if an element in filter is truthy, 
// the corresponding element in the collection belongs to the first group; 
// otherwise, it belongs to the second group.

const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));
// ????????????

// _____________________________________7___________________________________________________________________________________________________________

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

// ___________________________________________8_______________________________________________________________________________________________________________

// Write a JavaScript program to group the elements of an given array based on the given function.
const group_By = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    // ??????????????
    return acc;
  }, {});
console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 
console.log(group_By(['one', 'two', 'three'], 'length'));
