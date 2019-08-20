// ________________________________________________________________________________________________

// Write a JavaScript program to uncurry a function up to depth n.

const uncurry = (fn, n = 1) => (...args) => {
    const next = acc => args => args.reduce((x, y) => x(y), acc);
    if (n > args.length) throw new RangeError('Arguments too few!');
    return next(fn)(args.slice(0, n));
  };
  const add = x => y => z => x + y + z;
  const uncurriedAdd = uncurry(add, 3);
  console.log(uncurriedAdd(1, 2, 3));
  