// Get the value of the object and enter the function____________________________

const stats = {
    max: 56.68,
    min: -0.75,
    standard: 4.34,
    mode: 23.78,
    average: 35.86
};

const half = (function() {
    return function half({max, min}) {
        return (max + min) /2;
    };
})();

console.log(stats);
console.log(half(stats));

const average = (({average}) => {average})();
// Error the function

console.log(average(stats));