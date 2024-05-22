var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li")
var listItemButtons = document.querySelectorAll("button")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// Create a new list item
	var li = document.createElement("li");

	li.addEventListener("click", function () {
		li.classList.toggle("done")
	})
		
        
	// Create a span for the text content
	var span = document.createElement("span");
	span.textContent = input.value;

	// Create a delete button
	var deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function () {
			li.remove(); // Remove the parent <li> element when the delete button is clicked
	});

	// Append the span and delete button to the list item
	li.appendChild(span);
	li.appendChild(deleteButton);

	// Append the list item to the unordered list
	ul.appendChild(li);

	// Clear the input field
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

listItems.forEach(function (item) {
	item.addEventListener("click", function (event) {
		event.target.classList.toggle("done")
	})
})

listItemButtons.forEach(function (button) {
	button.addEventListener("click", function () {
		button.parentNode.remove();
	})
})


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);