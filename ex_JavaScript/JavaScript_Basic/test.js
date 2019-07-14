const numbers = [1, 2, 3, 4, 5, 6];
let sum = 0;
forEach(numbers, function(element){
    sum += element;
});
console.log(sum);
// => 21