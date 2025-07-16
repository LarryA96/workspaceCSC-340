//Create array to store locations
let locations = [];

//Create reference for unordered list
let list = document.querySelector("#ul");

//Connect event listener to input box
let input = document.querySelector("#input");
input.addEventListener("keydown", enter);

//Connect event listener to Add button
let addButton = document.querySelector("#add");
addButton.addEventListener("click", addItem);

//Connect Event listener to Clear buttons
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearList);
document.querySelector("#bottom").addEventListener("click", clearList);

//Take value of input and add it to array......."Add" button functionality
function addItem() {
  locations.push(input.value);
  input.value = "";
  displayList();
}

//Allow user to submit entry with enter key
function enter(event) {
  if (event.keyCode === 13) {
    addItem();
  }
}

//Display array........Update visual list function
function displayList() {
  list.innerHTML = "";
  locations.map(function (item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    li.className = "listItem";
    list.append(li);
  });
}

//Clear list......"Clear" button functionality
function clearList() {
  locations = [];
  list.innerHTML = "";
}
