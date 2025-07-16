/**Name: Larry Alston
     Assignment: Week 1 Assignment - Mapping
     Due Date: July 16, 2025 
*/

//Take value of input and add it to map......."Add" button functionality
function addItem() {
  locations.set(locationNum++, input.value);
  input.value = "";
  list.innerHTML = "";
  locations.forEach(displayList);
}

//Allow user to submit entry with enter key
function enter(event) {
  if (event.keyCode === 13) {
    addItem();
  }
}

//Create map to store locations
let locations = new Map();
let locationNum = 0;

//Create reference for unordered list
let list = document.querySelector("#ul");

//Connect event listener to input box
let input = document.querySelector("#input");
input.addEventListener("keydown", enter);

//Connect event listener to Add button
let addButton = document.querySelector("#add");
addButton.addEventListener("click", addItem);

//Display new map........Update visual list function
function displayList(value) {
  let li = document.createElement("li");
  li.innerHTML = value;
  li.className = "listItem";
  list.append(li);
}

//Clear map, visual list, and input field......"Clear" button functionality
function clearList() {
  locations.clear();
  list.innerHTML = "";
  input.value = "";
}

//Connect Event listener to Clear buttons
let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearList);
document.querySelector("#bottom").addEventListener("click", clearList);
