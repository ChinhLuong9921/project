// (---------------------1-----------------------)
// Filter array into itergers and square them.

const arr = [4, 5.6, -9.8, 3.5, 66, -75, 1.23, 33];

const squareList = arr => {
    return arr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
}

console.log(squareList(arr));

//________________________________2______________________________________________________________

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

//_____________________________________3_____________________________________________________________

var allMembers = [
    {name: "Chinh", team: null},
    {name: "Herry", team: "Chinh"},
    {name: 'Marry', team: "Chinh"},
    {name: 'Lan', team: "Herry"},
    {name: 'Obtain', team: "Herry"},
    {name: 'Khoi', team: null},
    {name: 'Tri', team: 'Marry'},
    {name: 'Dat', team: 'Marry'},
    {name: 'Boa', team: 'Khoi'},
    {name: 'Hai', team: 'Obtain'},
    {name: 'Tuan', team: 'Herry'},
    {name: 'Kiet', team: 'Khoi'},
    {name: 'Ha', team: 'Marry'},
    {name: 'Huong', team: 'Marry'}
];

function tree(name) {
    var results = {};
    allMembers.filter(function(item) {
        return item.team == name;
    }).forEach(function(item) {
        results[item.name] = tree(item.name);
    });
    return results;
}

console.log(tree(null));
//??????????????????????????????????????

// ______________________________________4______________________________________________________________________

// Write a JavaScript program to find the number of elements which presents in both of the given arrays.


function intersectCount(firstArr, secondArr) {
    let set1 = new Set(firstArr),
        set2 = new Set(secondArr);
    console.log(typeof set1);

    return [...set1].filter(e => set2.has(e)).length;
}
  
console.log(intersectCount([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(intersectCount([1, 2, 3, 4], [1, 2, 3, 2]));

//______________________________________5____________________________________________________________

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

//________________________________________6____________________________________________

// Write a JavaScript to find
// the longest string from an given array of strings.

function longest_in_arr(arr) {
    let longest = '';
    arr.map((ele, idx, arr) => {
        longest.length < arr[idx];
        longest = arr[idx];
    })
    return longest;
}

console.log(longest_in_arr(['aa', 'aaa', 'aaaaa']));
console.log(longest_in_arr(['cccc', '', 'cc', 'ccccccccccccc']));
//___________________________________________________________________________________________

function longest_string(arr) {
    let max = arr[0].length;
    arr.map(value => max = Math.max(max, value.length));
    // lần lượt so sánh các value trong array với max để gán max với length lớn nhất
    return arr.filter(value => value.length == max);
}

console.log(longest_string(['x', 'xx', 'xxxxxxxxxx']));
