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
    // ((...), acc): kết quả trả về acc

console.log(omit({a: 1, b: 2, c: 3}, ['a']));
console.log(omit({a: 'abc', abc: 'abcd', abcd: 'abcde'}, ['a', 'abcd']));

// ______________________________________5________________________________________________________________________________________________

// Write a JavaScript program to create an object from the given key-value pairs.

const object_From_Pairs = arr => 
  arr.reduce((acc, val) => ((acc[val[0]] = val[1]), acc), {});
  // ((...), acc): kết quả trả về acc

console.log(object_From_Pairs([['a', 1], ['b', 2], ['c', 3]]));

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
  arr
    .map(typeof fn === 'function' ? fn: val => val[fn])
    .reduce((acc, val, i) => (acc[val] = (acc[val] || []).concat(arr[i]), acc), {});
    // ((...), acc): kết quả trả về acc
    // acc[val]: tạo ra key bên trong đối tượng acc
    // .concat(arr[i]): ghép value của arr cũ vào với key mới 
    // i là key của arr cũ, có nó thì key mới sẽ tìm được value của nó

console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 
console.log(group_By(['one', 'two', 'three'], 'length'));

// ___________________________________________9_______________________________________________________________________________

// Write a JavaScript to find
// the longest string from an given array of strings.

const longest_in_arr = arr => {
  let longest = '';
  arr.map(ele => {
      longest.length < ele;
      return longest = ele;
  });
  return longest;
};

console.log(longest_in_arr(['aa', 'aaa', 'aaaaa']));
console.log(longest_in_arr(['cccc', '', 'cc', 'ccccccccccccc']));
// ______________________________________________________________________________

const longest_in_arr_length = arr => 
arr.reduce((acc, val) => acc = Math.max(acc, val.length), 0);

console.log(longest_in_arr_length(['aa', 'aaa', 'aaaaa']));
console.log(longest_in_arr_length(['cccc', '', 'cc', 'ccccccccccccc']));
console.log(longest_in_arr_length(['aa', 'aaa', 'aaaaa', 'adskfjkfja']));

// _________________________________________10____________________________________________________________________________________________--

// Write a JavaScript program to compute the average of an array, 
// after mapping each element to a value using the provided function.

const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0) 
    / arr.length;

console.log(averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(averageBy([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));


// __________________________________________11__________________________________________________________________________________________________________________

// Write a JavaScript program to split values into two groups according to a predicate function, 
// which specifies which group an element in the input collection belongs to.

// If the predicate function returns a truthy value, 
// the collection element belongs to the first group; otherwise, it belongs to the second group.

const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));

//_____________________________________12___________________________________________________________

// Write a JavaScript code to divide an given array of positive integers into two parts. 
// First element goes to first part, second element goes to second part,
// and third element goes to first part and so on.
//  Now compute the sum of two parts and store into an array of size two.
// [1, 3, 4, 5, 7, 9]
// [1, 4, 7] && [3, 5, 9]
// [12, 17]

const old_and_even = arr => 
  arr
    .reduce((acc, val, i) => (acc[(i%2) ? 0 : 1].push(val), acc), [[], []])
    .map((val) => val.reduce((acc, v) => acc + v, 0));
  

console.log(old_and_even([1, 2, 3, 4, 5]));
console.log(old_and_even([1, 2, 3, 4, 5, 6, 7]));

// ____________________________________13______________________________________________________________________________________________

// Multiply values ​​in a multi-layer array

const multiplyAll = arr => 
    arr.reduce((acc, val, i) => (arr[i].map((v2, i2) => acc *= arr[i][i2]), acc), 1);
    // ((...), acc): kết quả sẽ trả về acc

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[1, 2], [1, 1]]));

// _____________________________________14_______________________________________________________________________________________________________

// Write a JavaScript program to perform right-to-left function composition.
 
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
console.log(multiplyAndAdd5(5, 2)); 

// _____________________________________15__________________________________________________________________________________________________________________

// Write a JavaScript program to perform left-to-right function composition.

const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);

console.log(addAndSquare(1, 2));
console.log(addAndSquare(3, 2));

// ___________________________________16___________________________________________________________________________________________________________________________

// Write a JavaScript program 
// that accepts a converging function and a list of branching functions 
// and returns a function that applies each branching function to the arguments 
// and the results of the branching functions are passed as arguments to the converging function.

const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
console.log(average([ 6, 7]));
console.log(average([1, 2, 3, 4, 5, 6, 7]));

// _____________________________________17__________________________________________________________________________________________________________________________________

// Write a JavaScript program 
// to split values of two given arrays into two groups. 
// If an element in filter is truthy, 
// the corresponding element in the collection belongs to the first group; otherwise,
// it belongs to the second group.

const bifurcate = (arr, filter) => 
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
  // 0, 1 is the array names

console.log(bifurcate([1, 2, 3, 4], [true, true, false, false]));
console.log(bifurcate([1, 3, 5, 7, 9], [false, true, false, false, false]));

// ___________________________________________18____________________________________________________________________________________________

// Write a JavaScript program 
// to return the minimum-maximum value of an array, 
// after applying the provided function to set comparing rule.

const reduce_which = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));

console.log(reduce_which([-4, 1, 3, 2, 0, -2, -3])); // (1)
console.log(reduce_which([10, 30, 20], (a, b) => b - a));


// explain
// a trong phương thức reduce là giá trị tích lũy (accumulator)
// a or b được trả về sau mỗi lần chạy hàm comparator để gán vào giá trị a ở lần chạy tiếp theo
// ở (1)
// đầu tiên -4 sẽ được gán vào a và 1 gán vào b
// trong phương thức reduce, comparator trả về false và giá trị tích lũy a ở lần tiếp theo được gán với a (là giá trị false)
// cứ thế giá trị hiện tại (currentValue) b sẽ lấy lần lượt các element trong arr, ele nào bé hơn a tích lũy thì sẽ lấy đó làm a tích lũy mới
// đó là lí do tại sao solution này trả về minimum or maximum

// _________________________________________________19______________________________________________________________________________________________________________________

// Write a JavaScript program 
// to create a new array out of the two supplied by creating each possible pair from the arrays.

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
// reduce: giúp tích lũy các mảng mới được tạo ra và trả về 1 mảng lớn
// concat để ghép mảng mới với mảng lớn
// map: ghép từng phần tử nhỏ để tạo mảng mới

console.log(xProd([1, 2], [3, 4]));
console.log(xProd([1, 2, 3, 4], ['a', 'b', 'c', 'd']));

// ____________________________________________20___________________________________________________________________________________________

// Write a JavaScript program 
// to group the elements of an array based on the given function and returns the count of elements in each group.

const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(['one', 'two', 'three'], 'length'));

// ________________________________________21___________________________________________________________________________________________________________

// Write a JavaScript program to count the occurrences of a value in an array.

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));

// ________________________________________22___________________________________________________________________________________________________________

// Write a JavaScript program 
// to invert the key-value pairs of an object, without mutating it. 
// The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. 
// If a function is supplied, it is applied to each inverted key.

const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});

console.log(invertKeyValues({ a: 1, b: 2, c: 1 }));
console.log(invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value));

// ________________________________________23______________________________________________________________________________________________________

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

// ________________________________________24_________________________________________________________________________________________________

// Write a JavaScript program 
// to create an object with keys generated 
// by running the provided function for each key and the same values as the provided object.

const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});

console.log(mapKeys({ a: 1, b: 2 }, (val, key) => key + val));

// _________________________________________25_________________________________________________________________________________________________________________

// Write a JavaScript program 
// to map the values of an array to an object using a function, 
// where the key-value pairs consist of the original value as the key and the mapped value.

// Note: Use an anonymous inner function scope to declare an undefined memory space, using closures to store a return value. 
// Use a new Array to store the array with a map of the function over its data set and a comma operator to return a second step, 
// without needing to move from one context to another (due to closures and order of operations).

const mapObject = (arr, fn) =>
  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();
const squareIt = arr => mapObject(arr, a => a * a);
console.log(squareIt([1, 2, 3])); 

// _____________________________________________26_________________________________________________________________________________________

// Write a JavaScript program 
// to create an object with the same keys as the provided object and values generated 
// by running the provided function for each value.

const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});
const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
console.log(mapValues(users, u => u.age));

// ______________________________________________27__________________________________________________________________________________-

// Write a JavaScript program to pick  the key-value pairs corresponding to the given keys from an object.

const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
console.log(pick({ a: 1, b: '2', c: 3 }, ['a', 'c']));

// ______________________________________________28_________________________________________________________________________

// Write a JavaScript program 
// to create an object composed of the properties the given function returns truthy for. 
// The function is invoked with two arguments: (value, key).

const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));

// _____________________________________________29________________________________________________________________________

// Write a JavaScript program 
// to filter an array of objects based on a condition while also filtering out unspecified keys.

const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

console.log(reducedFilter(data, ['id', 'name'], item => item.age > 24));

// ______________________________________________30___________________________________________________________________________________

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

// ________________________________________________31__________________________________________________________________________________________________

// Write a JavaScript program 
// to return the object associating the properties 
// to the values of an given array of valid property identifiers and an array of values.

// Note: Since an object can have undefined values but not undefined property pointers, 
// the array of properties is used to decide the structure of the resulting object using Array.reduce().

const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});
console.log(zipObject(['a', 'b', 'c'], [1, 2])); 
console.log(zipObject(['a', 'b'], [1, 2, 3]));

// ___________________________________________________32________________________________________________________________________________

// Write a JavaScript program to create an array of elements, 
// ungrouping the elements in an array produced by zip and applying the provided function.

const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));

console.log(unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)));

// ___________________________________________________33_______________________________________________________________________________

// Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

console.log(uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));

// ___________________________________34____________________________________________________________________________________________________

// Write a JavaScript program 
// to find the number which appears most in a given array of integers.

const find_num_appears = arr => {
  let counter = {};
  arr.forEach(val => counter[val] = (counter[val] || 0) + 1);
  return counter;
};

console.log(find_num_appears([1, 2, 3, 5, 67, 7, 8, 99, 1, 2, 3, 55, 67]));

// _________________________________________________________________________________________________________________________________________

const find_num_appears_ = arr => 
  arr.reduce((acc, val) => (acc[val] = (acc[val] || 0) + 1, acc), {});

console.log(find_num_appears_([1, 2, 3, 5, 67, 7, 8, 99, 1, 2, 3, 55, 67]));
