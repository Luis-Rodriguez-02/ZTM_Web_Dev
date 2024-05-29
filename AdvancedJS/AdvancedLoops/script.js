const basket = ['apples', 'oranges', 'grapes'];

const detailedBakset = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

for ( let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
console.log("--------------------------");

basket.forEach(item => {
  console.log(item);
});
console.log("--------------------------");

// for of loop -> iterates through array
for (item of basket) {
  console.log(item);
}
console.log("--------------------------");

// for in loop -> enumerating -> objects have enumerable as a property
for (item in detailedBakset) {
  console.log(item);
}