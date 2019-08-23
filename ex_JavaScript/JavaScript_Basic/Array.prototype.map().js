// (------------------------------------1--------------------------)
// Write a JavaScript program to reverse the elements of a given array of integers length 3.

const reverse_arr = arr => 
  arr.map((val, idx) => arr[arr.length - idx - 1]);

console.log(reverse_arr([5, 4, 3])); 
console.log(reverse_arr([1, 0, -1]));  
console.log(reverse_arr([2, 3, 1]));

//_____________________________________2_____________________________________________

// Write a JavaScript program
// to find the larger value between the first or last and set all the other elements with that value.
// Display the new array.

const larger_in_arr = nums => 
  nums.map((e, i) => nums[i] = Math.max(nums[0], nums[2]));

console.log(larger_in_arr([1, 2, 3]));
console.log(larger_in_arr([2, 3, 5]));

//_______________________________________3_____________________________________________

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

//_____________________________________4___________________________________________________________

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

//______________________________________5_______________________________________________________

// Write a JavaScript program 
// to check if there is at least one element which occurs in two given sorted arrays of integers.

const similar_arr = (arr1, arr2) => {
  let result = false;
  arr1.map((v1) => arr2.map((v2) => {
      if (v1 === v2) result = true;
  }));
  return result;
};

console.log(similar_arr([1, 2, 3], [3, 4, 5]));
console.log(similar_arr([1, 2, 3], [1, 2, 3]));
console.log(similar_arr([1, 2, 3, 4], [2, 5, 6]));
console.log(similar_arr([1, 2, 3], [4, 5, 6]));

// ____________________________________6______________________________________________________________________________________________

// Multiply values ​​in a multi-layer array

const multiplyAll = arr => 
    arr.reduce((acc, val, i) => (arr[i].map((v2, i2) => acc *= arr[i][i2]), acc), 1);
    // ((...), acc): kết quả sẽ trả về acc

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[1, 2], [1, 1]]));

// ______________________________________7________________________________________________________________________________________________

// Filter array into itergers and square them.

const squareList = arr => 
  arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(num => num * num);

console.log(squareList([4, 5.6, -9.8, 3.5, 66, -75, 1.23, 33]));

// __________________________________________8____________________________________________________________________________________________________

// Write a JavaScript program to get the sum of an given array, 
// after mapping each element to a value using the provided function.

const sum_by = (arr, fn) => 
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0);

console.log(sum_by([{n: 1}, {n: 2}, {n: 5}, {n: 10}], o => o.n));
// __________________________________________9__________________________________________________________________________________________________________

// Write a JavaScript program to create an array of key-value pair arrays from an given object.

const object_to_pairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

console.log(object_to_pairs({a: 1, b: 2}));
console.log(object_to_pairs({a: 122, b: 123, c: 1244}));

// ___________________________________________10_______________________________________________________________________________________________________________

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

// ____________________________________________11_________________________________________________________________________________________________________

// Write a JavaScript program 
// to Initialize a two dimension array of given width and height and value.

const initialize_2D_Array = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
  // {length: h}: đối tượng miêu tả chiều dài mà Array.from sắp tạo ra
  // fill: điền val mới vào arr


console.log(initialize_2D_Array(2, 2, 0));
console.log(initialize_2D_Array(3, 3, 3));

// ___________________________________12____________________________________________________________________________________________________

// Write a JavaScript program 
// to initialize an array containing the numbers 
// in the specified range where start and end are inclusive with their common difference step.

const initialize_Array_With_Range = (end, start = 0, step = 1) =>
  Array
    .from({ length: Math.ceil((end + 1 - start) / step) })
    .map((v, i) => i * step + start);

console.log(initialize_Array_With_Range(5)); 
console.log(initialize_Array_With_Range(8, 3));  
console.log(initialize_Array_With_Range(6, 0, 2));  

// _________________________________________13____________________________________________________________________________________________--

// Write a JavaScript program to compute the average of an array, 
// after mapping each element to a value using the provided function.

const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val) => acc + val, 0) 
    / arr.length;

console.log(averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], o => o.a));
console.log(averageBy([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], 'a'));


// ___________________________________14___________________________________________________________________________________________________________________________

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

// ________________________________________15_______________________________________________________________________________________________

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


// _____________________________________16____________________________________________________________________________________________

// Write a JavaScript program 
// to return the difference between two arrays, 
// after applying the provided function to each array element of both.

const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(v => fn(v)));
  return a.filter(x => !s.has(fn(x)));
};

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));

// _____________________________________17______________________________________________________________________________________________________

// Write a JavaScript program 
// to compute the new ratings between two or more opponents using the Elo rating system. 
// It takes an array of pre-ratings and returns an array containing post-ratings. 
// The array should be ordered from best performer to worst performer (winner -> loser).

// Note: Use the exponent ** operator and math operators to compute the expected score (chance of winning). 
// of each opponent and compute the new rating for each. Loop through the ratings, 
// using each permutation to compute the post-Elo rating for each player in a pairwise fashion. 
// Omit the second argument to use the default kFactor of 32.

const elo = ([...ratings], kFactor = 32, selfRating) => {
  const [a, b] = ratings;
  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) =>
    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  if (ratings.length === 2) {
    return [newRating(a, 1), newRating(b, 0)];
  }
  for (let i = 0, len = ratings.length; i < len; i++) {
    let j = i;
    while (j < len - 1) {
      j++;
      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
    }
  }
  return ratings;
};

console.log(elo([1200, 1200])); // [1216, 1184]
console.log(elo([1200, 1200], 64)); // [1232, 1168]
// 4 player FFA, all same rank
console.log(elo([1200, 1200, 1200, 1200]).map(Math.round)); // [1246, 1215, 1185, 1154]
/*
For teams, each rating can adjusted based on own team's average rating vs.
average rating of opposing team, with the score being added to their
own individual rating by supplying it as the third argument.
*/

// _______________________________________18_______________________________________________________________________________________________________

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

// ________________________________________19__________________________________________________________________________________________________________________

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

// ___________________________________________20__________________________________________________________________________________________________

// Write a JavaScript program 
// to create a new string with the results of calling a provided function on every character in the calling string.

const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

console.log(mapString('Javascript exercises', c => c.toUpperCase()));

// ____________________________________________21_____________________________________________________________________________________

// Write a JavaScript program to get the maximum value of an array, 
// after mapping each element to a value using the provided function.

const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
console.log(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'));

// ______________________________________________22_________________________________________________________________

// Write a JavaScript program 
// to nest a given flat array of objects linked to one another recursively.

// Note: Useful for nesting comments, such as the ones on reddit.com.

const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));
// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); 
console.log(nestedComments);

// ______________________________________________23_______________________________________________________________________

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

// _______________________________________________24____________________________________________________________________________________________

// Write a JavaScript program 
// to create an array of elements, grouped based on the position 
// in the original arrays and using function as the last value to specify how grouped values should be combined.

// Note: Check if the last argument provided is a function.

const zipWith = (...array) => {
  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;
  return Array.from(
    { length: Math.max(...array.map(a => a.length)) },
    (_, i) => (fn ? fn(...array.map(a => a[i])) : array.map(a => a[i]))
  );
};

zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]

console.log(zipWith(
  [1, 2, 3],
  [10, 20],
  [100, 200],
  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
)); 

// _______________________________________________25____________________________________________________________________

// Write a JavaScript program to create an array of elements, 
// grouped based on the position in the original arrays.

const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

console.log(zip(['a', 'b'], [1, 2], [true, false]));
console.log(zip(['a'], [1, 2], [true, false]));

// __________________________________________________26_________________________________________________________________________________

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

// __________________________________________________27______________________________________________________________________________

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

// __________________________________________________28___________________________________________________________________________

// Write a JavaScript program 
// to create a function that accepts up to one argument, ignoring any additional arguments.

// Note: Call the provided function, fn, with just the first argument given.

const unary = fn => val => fn(val);
console.log(['6', '8', '10'].map(unary(parseInt)));

// __________________________________________________29_____________________________________________________________________

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

// __________________________________________________30_____________________________________________________________________________________

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

// ___________________________________________________31_________________________________________________________________________________

// Write a JavaScript program 
// to reduce a given Array-like into a value hash (keyed data store).

// Note: Given an Iterable or Array-like structure, 
// call Array.prototype.reduce.call() on the provided object to step over it 
// and return an Object, keyed by the reference value.

const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 1: 1 }
toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
// A more in depth example:
let users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];
let managers = [{ manager: 1, employees: [2, 3] }];
// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.
managers.forEach(
  manager =>
    (manager.employees = manager.employees.map(function(id) {
      return this[id];
    }, toHash(users, 'id')))
);
managers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]
console.log(managers);

// _________________________________________________32______________________________________________________

// Write a JavaScript program 
// to get the symmetric difference between two given arrays, 
// after applying the provided function to each array element of both.

const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

// __________________________________________________33___________________________________________

// Write a JavaScript program 
// to get the sum of the powers of all the numbers from start to end (both inclusive).

const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);

console.log(sumPower(10));
console.log(sumPower(10, 3));
console.log(sumPower(10, 3, 5));
