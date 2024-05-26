// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let exclamationUser = []
array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  exclamationUser.push(username);
}
);

exclamationUser.forEach((user) => {
  console.log(user);
})

//Create an array using map that has all the usernames with a "? to each of the usernames
let arrayMap = array.map((user) => {
  let { username } = user;
  return username + "?";
})

for (let i = 0; i < arrayMap.length; i++) {
  console.log(arrayMap[i]);
}

console.log("-------------");
//Filter the array to only include users who are on team: red
const teamRed = array.filter((user) => user.team === "red");

console.log(teamRed)

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, user) => acc + user.score
, 0);

console.log(totalScore);

// (1), what is the value of i? -> index of the numbers
// (2), Make this map function pure:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => {
	return num * 2;
})
console.log(newArray)
console.log("-----------------")
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const happyItems = array.map((user) => {
  let { items } = user;
  const excitedItems = items.map((item) => item + "!")
  return excitedItems
})

console.log(happyItems);

