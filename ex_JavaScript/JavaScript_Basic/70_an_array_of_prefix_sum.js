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

function accumulate(iterable, func = (x, y) => x + y) {
    return iterable.reduce((a, c) => {
      a.push(a.length > 0 ? func(a[a.length - 1], c) : c);
      return a;
    }, []);
  }
  
  console.log(accumulate([1, 2, 3, 4, 5]));
  console.log(accumulate([1, 2, -3, 4, -5, 6]));