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
