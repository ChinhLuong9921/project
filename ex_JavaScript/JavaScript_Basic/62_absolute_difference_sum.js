// Write a JavaScript program 
// to compute the sum of absolute differences of consecutive numbers of a given array of integers.

function sumAbs(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += Math.abs(arr[i] - arr[i+1]);
    }
    return sum;
}

console.log(sumAbs([0, 0, 0]));
console.log(sumAbs([1, 2, 1, 1, 1]));
console.log(sumAbs([1]));
console.log(sumAbs([1, 2, -5, -66, 55]));

// ______________________________________________________________________________________________________________

function absum(arr) {
	return arr.reduce((subtrs, item, inx, arr) => {
		//if 'inx' is the last element in the array, subtract first element from the last.
  		let el = (inx === arr.length-1) ? arr[0]: arr[inx+1];
	 		subtrs.push(Math.abs(Math.abs(item) - Math.abs(el)));
  				if (subtrs.length === arr.length) {
  					return subtrs.reduce((a,b) => {return a+b});
  				}
      
  		return subtrs;
		}, []);
}
let array = [1, 2, 3, 2, -5];
console.log(absum(array));

// Array.prototype.reduce()______________________________
// ???????????????????????????????????????
