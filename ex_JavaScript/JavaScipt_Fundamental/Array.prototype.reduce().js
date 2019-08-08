// (----------------------------1----------------------------------------)
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

// ___________________________________________2____________________________________________________________________________________________

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

// _________________________________________________3______________________________________________________________________________________________________________________

// Write a JavaScript program 
// to create a new array out of the two supplied by creating each possible pair from the arrays.

const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
// reduce: giúp tích lũy các mảng mới được tạo ra và trả về 1 mảng lớn
// concat để ghép mảng mới với mảng lớn
// map: ghép từng phần tử nhỏ để tạo mảng mới

console.log(xProd([1, 2], [3, 4]));
console.log(xProd([1, 2, 3, 4], ['a', 'b', 'c', 'd']));