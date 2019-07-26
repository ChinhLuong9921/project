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

//____________________________________________________________________________________________________

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