// (---------------------------1--------------------------------)
// Write a JavaScript program 
// to converts a comma-separated values (CSV) string to a 2D array.

// Note: Use String.split('\n') to create a string for each row, 
// then String.split(delimiter) to separate the values in each row. 
// Omit the second argument, delimiter, to use a default delimiter of ,. 
// Omit the third argument, omitFirstRow, to include the first row (title row) of the CSV string.

const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    // omitFirsRow = false thì sẽ trả về 0
    // nếu là true thì sẽ trả về data.indexOf('\n')
    .split('\n')
    .map(v => v.split(delimiter));

console.log(csv_to_array('a,b\nc,d'));
console.log(csv_to_array('a;b\nc;d', ';'));
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));

// ___________________________________2_____________________________________________________________________________________________________________

// Write a JavaScript program 
// to convert a comma-separated values (CSV) string to a 2D array of objects. 
// The first row of the string is used as the title row.

const CSV_to_JSON = (data, delimiter = ',') => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n') + 1)
      .split('\n')
      .map(v => {
        const values = v.split(delimiter);
        return titles.reduce((obj, title, idx) => ((obj[title] = values[idx]), obj), {});
      });
};
  
console.log(CSV_to_JSON('col1,col2\na,b\nc,d'));
console.log(CSV_to_JSON('col1;col2\na;b\nc;d', ';'));

// _______________________________________3_____________________________________________________________________________________

// Write a JavaScript program to find all elements in an given array except for the first one. 
// Return the whole array if the array's length is 1.

const the_first_one = arr => 
  arr.length === 1 ? arr : arr.slice(1);

console.log(the_first_one([1, 2, 3, 4, 5, 6]));
console.log(the_first_one([1]));

// _______________________________________4____________________________________________________________________________________________

// Write a JavaScript program 
// to execute a provided function once for each array element, 
// starting from the array's last element.

const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);

forEachRight([1, 2, 3, 4], val => console.log(val));

// ________________________________________5______________________________________________________________________________________________

// Write a JavaScript program 
// to replace all but the last number of characters with the specified mask character.

const mask = (cc, num = 4, mask = '*') =>
  ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

console.log(mask(1234567890)); 
console.log(mask(1234567890, 3));
console.log(mask(1234567890, -4, '$'));

// __________________________________________6___________________________________________________________________________________________________________

// Write a JavaScript program 
// to get the n maximum elements from the provided array. 
// If n is greater than or equal to the provided array's length, 
// then return the original array(sorted in descending order).

const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

console.log(maxN([1, 2, 3]));
console.log(maxN([1, 2, 3], 2));

// _____________________________________________7_______________________________________________________________-

// Write a JavaScript program 
// to create a function that gets the argument at index n. 
// If n is negative, the nth argument from the end is returned.

const nthArg = n => (...args) => args.slice(n)[0];
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
console.log(last(1, 2, 3, 4, 5));

// _____________________________________________8__________________________________________________________________________

// Write a JavaScript program to move the specified amount of elements to the end of the array.

const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
console.log(offset([1, 2, 3, 4, 5], 2));
console.log(offset([1, 2, 3, 4, 5], -2));

// _______________________________________________9_________________________________________________________________

// Write a JavaScript program to get the nth element of an given array.

const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
console.log(nthElement(['a', 'b', 'c'], 1));
console.log(nthElement(['a', 'b', 'b'], -3));

// ________________________________________________10________________________________________________

// Write a JavaScript program to uncurry a function up to depth n.

const uncurry = (fn, n = 1) => (...args) => {
  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};
const add = x => y => z => x + y + z;
const uncurriedAdd = uncurry(add, 3);
console.log(uncurriedAdd(1, 2, 3));

// ______________________________________________12_________________________________________________________________________________

// Write a JavaScript program to truncate a string up to a specified length.

// Note: Determine if the string's length is greater than num. 
// Return the string truncated to the desired length, with '...' appended to the end or the original string.

const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

console.log(truncateString('boomerang', 7));
