// condition ? expr 1 : expr2 => condition ? if : else

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid ? "You may enter" : "Access Deneied";

var autoMatedAnswer = "Your account # is " + (isUserValid ? "1234" : "Not avaliable"); 



console.log(answer);
console.log(autoMatedAnswer);


function moveCommand(direction) {
  var whatHappens;

  switch(direction) {
    case "foward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you encounter a monster";
      break;
    case "left":
      whatHappens = "you found a river";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}