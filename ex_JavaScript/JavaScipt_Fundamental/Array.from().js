// (-----------------------------1---------------------------------)

// Write a JavaScript program 
// to find every element that exists in any of the two given arrays once, using a provided comparator function.

const exists_once = (firstArr, secondArr, fn) => {
    let arr1 = new Set(firstArr),
        arr2 = new Set(secondArr);
    return [...arr1].filter(e => arr2.has(e)).filter(x => fn(x));
  };
  
console.log(exists_once([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], (x) => x >= 1));
console.log(exists_once([23, 34, 56, 77, 88], [23, 56, 72, 77, 88], (x) => x % 2 === 0));
  
// ______________________________________________________________________________________________________________________-
  
const union_With = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));
  
console.log(union_With([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)));
console.log(union_With([1, 2, 3, 4], [1, 2, 3, 4, 5], (a, b) => Math.round(a) === Math.round(b)));
// ???????????????????????

// ________________________________________2________________________________________________________________________________________

// Write a JavaScript program 
// to get an array of given n random integers in the specified range.


const random_intArray_In_Range = (min, max, length = 1) =>
  Array.from({length: length}, () => Math.floor(Math.random() * (max - min + 1)) + min);

console.log(random_intArray_In_Range(1, 60, 5));
console.log(random_intArray_In_Range(23, 534, 13));

// _______________________________________3____________________________________________________________________________________________

// Write a JavaScript program 
// to Initialize a two dimension array of given width and height and value.

const initialize_2D_Array = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
  // {length: h}: đối tượng miêu tả chiều dài mà Array.from sắp tạo ra
  // fill: điền val mới vào arr


console.log(initialize_2D_Array(2, 2, 0));
console.log(initialize_2D_Array(3, 3, 3));

// ___________________________________4____________________________________________________________________________________________________

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

// ______________________________________________________________________________________________________________________________

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
