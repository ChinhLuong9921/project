// Write a JavaScript program 
// to get a customized coalesce function that returns the first argument 
// that returns true from the provided argument validation function.

const coalesce_factory = valid => (...args) => args.find(valid);
const custom_coalesce = coalesce_factory(val => ![null, undefined, '', NaN].includes(val));

console.log(custom_coalesce(undefined, null, NaN, 'DinhChinh'));