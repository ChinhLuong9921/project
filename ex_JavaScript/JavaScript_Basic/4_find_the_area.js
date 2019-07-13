// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

function area(a, b, c) {
    return Math.sqrt((a+b+c) * (a+b-c) * (a+c-b) * (b+c-a)) / 4;
}
let triangle = area(5, 6, 7);
console.log(triangle);