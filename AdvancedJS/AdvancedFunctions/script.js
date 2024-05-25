const first = ( ) => {
  const greet = 'Hi';
  const second = () => {
    alert(greet);
  }
  return second;
}

// Closures -> child remembers parent scope
// Currying -> functions that take arguments separately

const multiply = (a, b) => a * b;
const curriedMutiply = (a) => (b) => a * b;
curriedMutiply(3)(4);
console.log(curriedMutiply(3)(4));

// Compose -> output of one function is input of another

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);
// sum = 5 +1 then sum = 6 + 1 