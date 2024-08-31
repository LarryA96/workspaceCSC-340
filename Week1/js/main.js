/*
Name: Larry Alston
Due Date: September 9, 2024
Assignment: Week 1 project "Moving ball"
*/

//Connecting to the #ball html element and attaching an event listener to the webpage
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

//Variable to set ball position
let position = 0;

//Moves ball according to key pressed
function handleKeyPress(arrow) {
  let moved = false;
  if (arrow.code === "ArrowLeft") {
    position = position - 10;
    moved = true;
  }
  if (arrow.code === "ArrowRight") {
    position = position + 10;
    moved = true;
  }
  if (position < 0) {
    position = 0;
    moved = false;
  }

  refresh(moved);
}

//Updates ball position and logs new positions to console
function refresh(moved) {
  ball.style.left = position + "px";
  if (moved == true) {
    console.log("New position is " + position + "px");
  }
}
