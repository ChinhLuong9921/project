// ___________________________________________________________________________________________________________________________

// Write a JavaScript program to add an event listener to an element with the ability to use event delegation.

const on = (el, evt, fn, opts = {}) => {
    const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
    el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
    if (opts.target) return delegatorFn;
};
  
const fn = () => console.log('!');
console.log(on(document.body, 'click', fn));  
console.log(on(document.body, 'click', fn, { target: 'p' }));  
console.log(on(document.body, 'click', fn, { options: true }));

// ___________________________________________2_________________________________________________________________________________________

// Write a JavaScript program 
// to reduce a given Array-like into a value hash (keyed data store).

// Note: Given an Iterable or Array-like structure, 
// call Array.prototype.reduce.call() on the provided object to step over it 
// and return an Object, keyed by the reference value.

const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 1: 1 }
toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
// A more in depth example:
let users = [{ id: 1, first: 'Jon' }, { id: 2, first: 'Joe' }, { id: 3, first: 'Moe' }];
let managers = [{ manager: 1, employees: [2, 3] }];
// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.
managers.forEach(
  manager =>
    (manager.employees = manager.employees.map(function(id) {
      return this[id];
    }, toHash(users, 'id')))
);
managers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]
console.log(managers);

// _______________________________________________3_____________________________________________________-

// Write a JavaScript program to Iterate over a callback n times.

const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
