// Write a JavaScript program to create an array of prefix sums of the given array.

// In computer science, the prefix sum, cumulative sum, inclusive scan, 
// or simply scan of a sequence of numbers x0, x1, x2, ... is a second sequence of numbers y0, y1, y2, ..., 
// the sums of prefixes of the input sequence:
// y0 = x0	
// y1 = x0 + x1
// y2 = x0 + x1+ x2
// ...

function accumulate(iterable, func = (x, y) => x + y) {
    return iterable.reduce((a, c) => {
      a.push(a.length > 0 ? func(a[a.length - 1], c) : c);
      return a;
    }, []);
}
  
console.log(accumulate([1, 2, 3, 4, 5]));
console.log(accumulate([1, 2, -3, 4, -5, 6]));