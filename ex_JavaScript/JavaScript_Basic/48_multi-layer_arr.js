// Multiply values ​​in a multi-layer array

function multiplyAll(arr) {
    let product = 1;
    arr.map((v1, i1, arr) => {
      arr[i1].map((v2, i2) => product *= arr[i1][i2]);
      //arr[i1].reduce((a, b) => product = product * a * b); ?????
    });
    return product;
  }
  
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
  console.log(multiplyAll([[1, 2], [1, 1]]));