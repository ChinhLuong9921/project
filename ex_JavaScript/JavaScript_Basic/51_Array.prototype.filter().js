// Filter array into itergers and square them.

const arr = [4, 5.6, -9.8, 3.5, 66, -75, 1.23, 33];

const squareList = arr => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
}

console.log(squareList(arr));

//______________________________________________________________________________________________

// Write a JavaScript program to find all distinct prime factors of a given integer

const prime_seq = num => {
    let prime_arr = [];
    let flag;

    for (let i = 2; i <= num; i++) {
        flag = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag) prime_arr.push(i);
    }

    return prime_arr;
};

function prime_Factors(num) {
    let primes_arr = prime_seq(num);
    let factors = primes_arr.filter(e => {
        return num % e == 0;
    });

    return '' + factors;
}

console.log(prime_Factors(99));
console.log(prime_Factors(101));
console.log(prime_Factors(228));