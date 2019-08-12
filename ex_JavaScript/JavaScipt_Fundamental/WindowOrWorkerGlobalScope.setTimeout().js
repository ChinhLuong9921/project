// Write a JavaScript program to chain asynchronous functions.

// Note: Loop through an array of functions containing asynchronous events, 
// calling next when each asynchronous event has completed.

const chainAsync = fns => {
    let curr = 0;
    const next = () => fns[curr++](next);
    next();
  };
chainAsync([
    next => {
      console.log('0 seconds');
      setTimeout(next, 1000);
    },
    next => {
      console.log('1 second');
    }
]);
  