// (--------------------1-------------------------)
// function declararion by const variable

const increment = (function() {
    return function increment(num, val = 1) {
        return num + val;
    };
})();

// parenthesis ở cuối để js biết đây là hàm
// nếu không có thì sẽ trở thành 1 biến bình thường

//___________________________________2__________________________________________________

const sum = (function() {
    return function sum(x, y, z) {
    // return function sum(...args) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 4));

//___________________________________3_________________________________

const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson('DinhChinh', 20, 'male'));

// The same___________________________________________
// const createPerson = (name, age, gender) => {
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     };
// };
