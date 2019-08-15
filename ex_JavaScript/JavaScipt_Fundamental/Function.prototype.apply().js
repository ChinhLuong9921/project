// (------------------------1-----------------------------)

// Write a JavaScript program 
// to create a function that invokes each provided function with the arguments it receives and returns the results.

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
// Function.prototype.apply(thisArg, argsArr);
// thisArg: null ==> global object (this chỉ về đối tượng toàn cục)
// return: The result of calling the function with the specified this value and arguments.
const minMax = over(Math.min, Math.max);

console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));
// ?????????????

// _____________________________________2____________________________________________________________________________________________________________

// Write a JavaScript program 
// to create a function that invokes fn with a given context, 
// optionally adding any additional supplied parameters to the beginning of the arguments.

const bind = (fn, context, ...args) =>
  function() {
    return fn.apply(context, args.concat(...arguments));
  };
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'Morning' };
const freddyBound = bind(greet, freddy);

console.log(freddyBound('Good', '!'));

// ______________________________________3___________________________________________________________________________________________________________________________

// Write a JavaScript program 
// to create a function that invokes the method at a given key of an object, 
// optionally adding any additional supplied parameters to the beginning of the arguments.

const bindKey = (context, fn, ...args) =>
  function() {
    return context[fn].apply(context, args.concat(...arguments));
  };

const freddy = {
  user: 'fred',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
const freddyBound = bindKey(freddy, 'greet');

console.log(freddyBound('hi', '!'));

// ___________________________________4___________________________________________________________________________________________________________________________

// Write a JavaScript program 
// that accepts a converging function and a list of branching functions 
// and returns a function that applies each branching function to the arguments 
// and the results of the branching functions are passed as arguments to the converging function.

const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
console.log(average([ 6, 7]));
console.log(average([1, 2, 3, 4, 5, 6, 7]));
