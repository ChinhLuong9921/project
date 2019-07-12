function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}

const circle = new Circle(12);

for (let keys in circle) {
    if (typeof circle[keys] !== 'function') console.log(keys, circle[keys]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) console.log('Circle has a radius');