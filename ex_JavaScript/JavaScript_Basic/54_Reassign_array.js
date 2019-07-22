// Reassign array_____________________________________________

const source = [1, 2, 3, 4, 5, 6, 7, 8];

function removeFirst_and_Two(list) {
    const [ , , ...arr] = list;
    return arr;
}

const arr = removeFirst_and_Two(source);

console.log(arr);
console.log(source);