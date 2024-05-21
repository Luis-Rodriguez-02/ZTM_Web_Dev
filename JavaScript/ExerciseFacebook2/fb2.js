var database = [
  {
  username: "Luis",
  password: "supersecret"
  },
  {
    username: "Sally",
    password: "123"
  },
  {
    username: "Joe",
    password: "super"
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
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      return True
    }
  }
  return false;
}
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed)
  } else {
    alert("Wrong username and password")
  }
  // database.forEach(function(user) {
  //   if (username === user.username && password === user.password) {
  //   console.log(newsfeed);
  // } else {
  //   alert("Wrong username and password");
  // }
  // })
  
}

signIn(userNamePrompt, passwordPrompt);

