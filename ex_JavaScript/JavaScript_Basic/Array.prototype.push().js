// (----------------------------1---------------------------)
// Write a JavaScript program to reverse the elements of a given array of integers length 3.

function reverse_arr(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverse_arr([1, 2, 3]));
console.log(reverse_arr([3, 2, 1]));

//_________________________________________________________________________________________________
function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
    // element: currentValue
    // idx: index
    // arr: array
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));

// __________________________________________2_____________________________________________________________

// Update the record

let collection = {
    '2548': {
      'album': 'Slippery When Wet',
      'artist': 'Bon Jovi',
      'tracks': [
        'Let It Rock',
        'You Give Love A Bad Name'
      ]
    },
    '2468': {
      'album': '1999',
      'artist': 'Prince',
      'tracks': [
        '1999',
        'Little Red Corvette'
      ]
    },
    '1245': {
      'album': ['a'],
      'artist': 'Robert Palmer',
      'tracks': []
    }, 
    '5439': {
      'album': 'ABBA Gold'
    }
  }
  
const collectionCopy = JSON.parse(JSON.stringify(collection));
  // JSON.parse--- chuyển chuỗi JSON thành object
  // JSON.stringify--- chuyển chuỗi object thành chuỗi JSON
  
function updateRecords(id, prop, value) {
    if (value === '') delete collection[id][prop];
    else if (prop === 'album') {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
      // ???????????????????????????????????????????????????
    }
    else collection[id][prop] = value;
}
  
console.log(updateRecords(1245, 'album', 'abcxyz'));

//_________________________________________3_____________________________________________________

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

// _____________________________________________4______________________________________________________________________________________

// Write a JavaScript program to create an array of elements, 
// ungrouping the elements in an array produced by zip and applying the provided function.

const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));

console.log(unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)));

// _______________________________________________5___________________________________________________________________________________

// Write a JavaScript program to get all unique values of an array, based on a provided comparator function.

const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

console.log(uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
));

// _______________________________________________6___________________________________________________________________________

// Write a JavaScript program to build  an array, using an iterator function and an initial seed value.

const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
var f = n => (n > 50 ? false : [-n, n + 10]);
console.log(unfold(f, 10));
