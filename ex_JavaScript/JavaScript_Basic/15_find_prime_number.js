// Write a JavaScript program 
// to sort an array of all prime numbers between 1 and a given integer.

function sort_prime(num) {
    const prime_num1 = [];
    const prime_num2 = [];
    for (let i = 0; i <= num; i++) {
        prime_num2.push(true);
    }
    for (let i = 2; i <= num; i++) {
        if (prime_num2[i]) {
            prime_num1.push(i);
            for (let j = 1; j*i <= num; j++) {
                prime_num2[i*j] = false;
            }
        }
    }
    return prime_num1;
}

console.log(sort_prime(5));
console.log(sort_prime(10));
console.log(sort_prime(20));

//________________________________________________________________________________

function primes(num) {
    let result = [];
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i !== 2 && i % j === 0) break;
            // break làm vòng lặp i tại thời điểm đó dừng 
            // và chuyển qua vòng lặp i mới
            if (i === 2 || j == i-1) result.push(i);
        }
    }
    return result;
}

console.log(primes(9));
console.log(primes(15));
console.log(primes(20));