//Objects for the time of day
let morning = {
  message: "Good Morning! It is ",
  image: "images/morning.jpg",
  routine: ["Make bed", "Let dog out", "Brush teeth", "Shower", "Eat"],
  audio: "songs/morning.mp3",
};

let afternoon = {
  message: "Good Afternoon! It is ",
  image: "images/afternoon.jpg",
  routine: [
    "Go to class",
    "Feed dog",
    "Daily crossword",
    "Check mail",
    "Prep dinner",
  ],
  audio: "songs/afternoon.mp3",
};

let evening = {
  message: "Good Evening! It is ",
  image: "images/evening.jpg",
  routine: [
    "Homework",
    "Play with dog",
    "Make dinner",
    "Shower",
    "Turn TV off",
  ],
  audio: "songs/evening.mp3",
};

//Get the time of day
let time = new Date();

if (time.getHours() < 11) {
  routine(morning);
} else if (time.getHours() > 19) {
  routine(afternoon);
} else {
  routine(evening);
}

function routine(timeOfDay, suffix) {
  //Message reflecting time of day
  let message = document.querySelector("#message");
  message.innerHTML =
    timeOfDay.message +
    time
      .toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .split(",")[1];

  //Change image
  let image = document.querySelector("#img-routine");
  image.src = timeOfDay.image;

  //Change audio
  let audio = document.querySelector("audio");
  audio.src = timeOfDay.audio;

  //Fill in list
  let list = document.querySelector("#ul-routine");
  for (let item of timeOfDay.routine) {
    let li = document.createElement("li");
    li.innerHTML = item;
    list.append(li);
  }
}
