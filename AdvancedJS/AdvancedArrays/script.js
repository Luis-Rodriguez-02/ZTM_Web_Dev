var array = [1, 2, 10 ,16];
const double = [];
const newArray = array.forEach((num) => {
  double.push(num *= 2);
});

// map, filter, reduce



//map always has to return something
const mapArray = array.map((num) => {
  return num *=2;
});

//or

const betterMap = array.map(num => num *= 2);

// filter items based on a condition
const filterArray = array.filter(num => {
  return num > 5;
})

const betterFilterArray = array.filter(num => num > 5);


// reduce -> can do filtering and mapping

const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

// accumulator is a place we can store the information that happens in the body of the function