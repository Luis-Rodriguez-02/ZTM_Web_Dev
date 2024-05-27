const array = [1, [2, 3], [[[[[4, 5]]]]]];
console.log(array.flat(array.length));

const entries = ['bob', 'sally', , , , , , 'cindy']
console.log(entries);
console.log(entries.flat());

const arrayFlatten = array.flatMap(number => number + 2);
console.log(arrayFlatten);

let userEmail = "         eddy202222@aol.com";
userEmail.trimStart();
userEmail.trimEnd();

console.log("-----------------")



let userProfiles = [
  ['commanderTom', 23],
  ['derekZlander', 40],
  ['hansel', 55]];

console.log(Object.fromEntries(userProfiles));

try {
  
} catch {

}
