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
  