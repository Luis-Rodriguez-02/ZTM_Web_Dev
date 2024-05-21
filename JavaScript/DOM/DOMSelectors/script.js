var item = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
  return item.value.length;
}
function createListElement() {
  if (inputLength() > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
  }
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
      }
}

button.addEventListener("click", addListAfterClick);
item.addEventListener("keydown", addListAfterKeyPress);