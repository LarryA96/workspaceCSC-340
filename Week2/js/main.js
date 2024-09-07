/*
Name: Larry Alston
Due Date: September 8, 2024
Assignment: Week 2 project "Favorite Foods"
*/

//Write heading to the page
document.getElementById("heading").innerHTML = "Favorite Foods";

//Create unordered list and give it an id
let list = document.createElement("ul");
list.setAttribute("id", "list");

//Add unordered list to the body of webpage
document.getElementById("body").append(list);

//Style list so that it is centered
list.style.margin = "auto";
list.style.width = "fit-content";

//Create array of favorite foods
let favFoods = [
  "Cheeseburger",
  "Shrimp alfredo",
  "Spaghetti",
  "Salmon",
  "Potato",
];

//Add favorite foods to list
for (let item of favFoods) {
  let newItem = document.createElement("li");
  newItem.innerHTML = item;
  list.append(newItem);
}

console.log("I'm feeling excited about this JavaScript Course!");
