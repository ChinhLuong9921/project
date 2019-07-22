// Filter array into itergers and square them.

const arr = [4, 5.6, -9.8, 3.5, 66, -75, 1.23, 33];

const squareList = arr => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
}

console.log(squareList(arr));