// Factories Function_______________________________________
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const cir1 = createCircle(1);
console.log(cir1);