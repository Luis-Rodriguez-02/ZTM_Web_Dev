// Create an object and an array which we will use in our facebook exercise. 
 
// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
//var user = {
  username: "Lrod2002",
  password: "shazam100"
//}

// 2. Create an array which contains the object you have made above and name the array "database".

//var database = [user];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
//var newsfeed = [
  {
    username: "Bob",
    timeline: "",
  },
  {
    username: "Jeff",
    timeline: ""
  },
  {
    username: "Andy",
    timeline: ""
  }
//]

var database = [
  {
  username: "Luis",
  password: "supersecret"
  }
];

var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooo cool"
  }
];

var userNamePrompt = prompt("What's your username");
var passwordPrompt = prompt("What's your password");

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Wrong username and password");
  }
}

signIn(userNamePrompt, passwordPrompt);


