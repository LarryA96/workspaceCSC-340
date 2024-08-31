const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let moved = false;

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 10;
    moved = true;
  }
  if (e.code === "ArrowRight") {
    position = position + 10;
    moved = true;
  }
  if (position < 0) {
    position = 0;
    moved = false;
  }

  refresh();
}

function refresh() {
  ball.style.left = position + "px";
  if (moved == true) {
    console.log("New position is " + position + "px");
  }
}
