// Write a JavaScript program 
// to check whether two arrays of integers of same length are similar or not. 
// The arrays will be similar if one array can be obtained from another array 
// by swapping at most one pair of elements.

// function check_arr(arr1, arr2) {
//     let count = 0;
//     arr1.map(v1 => {
//         arr2.filter(v2 => {
//             (v1 === v2) ? count++ : count;
//             if (count == arr2.length) return true;
//             return false;
//         });
//     });
//     return false;
// }

// console.log(check_arr([1, 2, 3], [1, 2, 3]));
// console.log(check_arr([1, 2, 3], [1, 2, 4]));

function array_checking(arra1, arra2) {

    for(let i = 0; i < arra1.length; i++) {
      for(let j = i; j < arra1.length; j++) {
        let result = true;
        const temp = arra1[i];
        arra1[i] = arra1[j];
        arra1[j] = temp;
        for(let k = 0; k < arra1.length; k++) {
          if(arra1[k] !== arra2[k]) {
            result = false;
            break;
          }
        }
        if(result) {
          return true;
        }
        arra1[j] = arra1[i];
        arra1[i] = temp;
      }
    }
    return false;
  }
  
  console.log(array_checking([10,20,30], [10,20,30]))
  console.log(array_checking([10,20,30], [30,10,20]))
  console.log(array_checking([10,20,30,40], [10,30,20,40]))
  