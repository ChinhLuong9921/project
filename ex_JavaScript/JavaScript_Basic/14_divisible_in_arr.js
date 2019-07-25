// Write a JavaScript program 
// to find the number of sorted pairs formed 
// by its elements of an given array of integers such 
// that one element in the pair is divisible by the other one.

// For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
// The output of [2, 4, 6] -> 2 - (2,4), (2,6)
// The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)

function divisible_in_arr(arr) {
    let pairs = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j] % arr[i] === 0 || arr[i] % arr[j] === 0) pairs++;
      }
    }
    return pairs;
  }
  
  console.log(divisible_in_arr([1, 2, 3, 4, 5]));
  console.log(divisible_in_arr([2, 4, 5, 7, 9]));
  
  // .map() or forEach() ????????????????????????????????????
  