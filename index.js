function receivesAFunction(callback) {
  // Call the provided callback function
  callback();
}

// Quiz 2

const returnsANamedFunction = () => {
  function namedFunction() {
    // Function body (optional)
  }
  return namedFunction;
};

// Quiz 3
const returnsAnAnonymousFunction = () => () => {
  // Function body (optional)
};
