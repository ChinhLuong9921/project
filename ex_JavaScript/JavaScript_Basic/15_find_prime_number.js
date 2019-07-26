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

//______________________________________________________________________________________________

// Write a JavaScript program 
// to find the smallest prime number strictly greater than a given number.

function prime_num(num) {
    for (let i = num + 1;; i++) {
      let isPrime = true;

      for (let d = 2; d*d <= i; d++) {
        if (i % d === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) return i;
    }
}
  
console.log(prime_num(10));
console.log(prime_num(21));
console.log(prime_num(13));

//__________________________________________________________________________________________________

// Write a JavaScript program to find all distinct prime factors of a given integer

function prime_factors(num) {
    const is_prime = num => {
        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const result = [];

    for (let i = 0; i <= num; i++) {
        while (is_prime(i) && num % i === 0) {
            if (!result.includes(i)) result.push(i);
            num /= i;
        }
    }
    
    return result;
}

//_______________________________________________________________________________________________

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