//Higher Order Componenets

function hof() {
  return function () {
    console.log("some value");
  };
}

const hofHolder = hof(); // --> return onley hof function
const hofHolder = hof()(); // --> return hof function and unknown function (with console.log)

//Example
function hof(a) {
  return function (b) {
    console.log(a + "and" + b);
    return function (c) {
      console.log(a + b + c);
    };
  };
}

const hofHolder = hof(a);
const f = hofHolder(b); // When we call b function , automatically displays a function .
const h = f(c); // or const f = hofHolder(b)(c);
