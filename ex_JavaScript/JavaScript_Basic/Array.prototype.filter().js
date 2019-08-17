// (---------------------1-----------------------)
// Filter array into itergers and square them.

const squareList = arr => 
  arr
    .filter(num => Number.isInteger(num) && num > 0)
    .map(num => num * num);

console.log(squareList([4, 5.6, -9.8, 3.5, 66, -75, 1.23, 33]));

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
// func tìm ra các prime phạm vi từ 2 tới num
  
const prime_Factors = num => {
    let prime_arr = prime_seq(num);
    let factors = prime_arr.filter(e => num % e == 0);
    // lọc ra các prime mà num có thể chia hết
    return '' + factors;
};
  
console.log(prime_Factors(99));
console.log(prime_Factors(101));
console.log(prime_Factors(229));

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


// const tree = name => {
//     const results = {};
//     allMembers
//       .filter(item => item.name == name)
//       .forEach(item => results[item.name] = tree(item.name));
//     return results;
//   };
  
//   console.log(tree(null));
// ???????????????????

// ______________________________________4______________________________________________________________________

// Write a JavaScript program to find the number of elements which presents in both of the given arrays.

const intersectCount = (firstArr, secondArr) => {
    let set2 = new Set(secondArr);
    return Array.from(new Set([...firstArr])).filter(e => set2.has(e)).length;
};
  
console.log(intersectCount([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(intersectCount([1, 2, 3, 4], [1, 2, 3, 2]));
 
// _______________________________________5____________________________________________________________________________________________________

// Write a JavaScript program to filter out the element(s) of an given array, that have one of the specified values.

const without = (arr, ...args) => arr.filter(v => !args.includes(v));

console.log(without([2, 1, 2, 3], 1, 2));
console.log(without([2, 1, 2, 3], 3));

// _________________________________6_____________________________________________________________________________________________________________________

// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
 
const omit = (obj, arr) => 
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    // lọc ra các phần tử không có trong arr
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
    // gán các key-value pair cho object acc mới

console.log(omit({a: 1, b: 2, c: 3}, ['a']));
console.log(omit({a: 'abc', abc: 'abcd', abcd: 'abcde'}, ['a', 'abcd']));

// __________________________________7___________________________________________________________________________________________________________________

// Write a JavaScript program to remove falsey values from an given array.

const compact = arr => arr.filter(Boolean);

console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 234]));
  
// ___________________________________8___________________________________________________________________________________________________________________________

// The Object.getPrototypeOf() method returns the prototype 
// (i.e. the value of the internal [[Prototype]] property) of the specified object.

const functions = (obj, inherited = false) => 
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
    ).filter(key => typeof obj[key] === 'function');

function Foo() {
    this.a = () => 1;
    this.b = () => 2;
}
Foo.prototype.c = () => 3;

console.log(functions(new Foo()));
console.log(functions(new Foo(), true));

// _______________________________________9___________________________________________________________________________________________________

// Write a JavaScript program 
// to filter out all values from an array for which the comparator function does not return true.

const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
console.log(differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)));

// __________________________________________10__________________________________________________________________________________

// Write a JavaScript program to negates a predicate function.
// Note: Take a predicate function and apply the not operator (!) to it with its arguments.

const negate = func => (...args) => !func(...args);
console.log([1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)));

// ___________________________________________11____________________________________________________________________

// Write a JavaScript program 
// to nest a given flat array of objects linked to one another recursively.

// Note: Useful for nesting comments, such as the ones on reddit.com.

const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));
// One top level comment
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 }
];
const nestedComments = nest(comments); 
console.log(nestedComments);

// ______________________________________________12_________________________________________________________________________

// Write a JavaScript program 
// to create an object composed of the properties the given function returns truthy for. 
// The function is invoked with two arguments: (value, key).

const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
console.log(pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));

// _________________________________________________13____________________________________________________________________

// Write a JavaScript program 
// to filter an array of objects based on a condition while also filtering out unspecified keys.

const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

console.log(reducedFilter(data, ['id', 'name'], item => item.age > 24));

// _____________________________________________14____________________________________________________________________________

// Write a JavaScript program to convert a given string into an array of words.

const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
console.log(words('I love javaScript!!')); 
console.log(words('python, java, php'));
