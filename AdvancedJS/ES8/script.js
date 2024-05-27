.padstart()
.padEnd()

const fun = (
  a, 
  b, 
  c, 
  d, 
  e,
  ) => {
  console.log(a)
}

Object.values
Object.entries
Object.keys

let obj = {
  username0: 'Santa',
  username1: 'Rudolph',
  username2: 'Mr Grinch'
}

// can interate through objects
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key])
})

// gives the values
Object.values(obj).forEach(value => {console.log(value)})

//gives the values and names
Object.entries(obj).forEach(value => {
  console.log(value);
})