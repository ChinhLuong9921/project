// (-----------------1---------------------)
// Write a JavaScript program
// to swap the first and last elements of a given array of integers.
// The array length should be at least 1.

function first_and_last(arr) {
    if (arr.length > 1) {
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
        return arr;
    }
    return false;
}

console.log(first_and_last([1, 2, 3, 4]));
console.log(first_and_last([1]));

// ____________________________________2____________________________________________________________________________________________________

// Lookup the profile________________________________

const profile = [
    {
      'firstName': 'Sherlock',
      'lastName': 'Holmes',
      'number': '0999999999',
      'likes': ['Intriguing case', 'Sing']
    },
    {
      'firstName': 'Chinh',
      'lastName': 'Luong',
      'number': '0335981xxx',
      'likes': ['Coding', 'Sing']
    }
  ];
  
  function lookupProfile(name, prop) {
    for (let i = 0; i < profile.length; i++) {
      if (profile[i].firstName === name) {
        return profile[i][prop] || 'No such property';
      }
    }
    return 'No such name';
}
  
console.log(lookupProfile('Chinh', 'number'));

// ____________________________________3_________________________________________________________________________________________________________

// Write a JavaScript program to check if a given matrix is diagonal or not

function is_diagonal_matrix(mtx) {
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j < mtx.length; j++) {
            if (i !== j && mtx[i][j] !== 0) return false;
            // i === j: là những tọa độ tại đường chéo
        }
    }
    return true;
}

console.log(is_diagonal_matrix([[1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 4]]));
console.log(is_diagonal_matrix([[1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 0]]));

//_____________________________________4_______________________________________________________________

// Write a JavaScript program to check if a given matrix is lower triangular or not.

function mtx_is_lower_triagular(mtx) {
    for (let i = 0; i < mtx.length; i++) {
      for (let j = 0; j < mtx.length; j++) {
        if (j > i && mtx[i][j] !== 0) return false;
      }
    }
    return true;
  }
  
  console.log(mtx_is_lower_triagular([[0, 0, 0], [1, 0, 0], [2, 3, 0]]));
  console.log(mtx_is_lower_triagular([[0, 0, 0, 0], [1, 0, 0, 0], [2, 3, 0, 0], [4, 5, 6, 0]]));
  console.log(mtx_is_lower_triagular([[1, 0, 0], [2, 3, 0], [0, 0, 0]]));
  console.log(mtx_is_lower_triagular([[0, 0, 1], [1, 0, 0], [2, 3, 0]]));