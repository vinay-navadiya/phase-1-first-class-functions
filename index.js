function receivesAFunction(callback) {
    callback(); // Call the callback function
  }
  function returnsANamedFunction() {
    return function namedFunction() {
      // Code for the named function goes here
    }
  }
  function returnsAnAnonymousFunction() {
    return function() {
      // Code for the anonymous function goes here
    }
  }
   