import { useState } from "react";

function Form() {
  //Create array and set color state to random color
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [color] = useState(() => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  });

  //Function to compare guess and update response
  const runCheck = (event) => {
    //preventDefault to stop actual form submiission
    event.preventDefault();

    //Get user answer and format it for comparison
    let input = document.getElementById("guessBox");
    let guess = input.value.toLowerCase().replaceAll(" ", "");

    //Grab html elements that will be modified
    let h2 = document.getElementById("response");
    let img = document.getElementById("image");

    if (guess == color) {
      h2.innerHTML = `That's correct! How'd you know ${color} is my favorite?`;
      h2.style.visibility = "visible";
      img.src =
        "https://1000wordphilosophy.com/wp-content/uploads/2021/05/happiness.jpg";
    } else {
      h2.innerHTML = `Sorry, "${guess}" is incorrect, try again :P`;
      h2.style.visibility = "visible";
      img.src =
        "https://media.istockphoto.com/id/1043260742/photo/sadness-little-girl-stock-images.jpg?s=612x612&w=0&k=20&c=C0r64ILbmVkkLuHGHR6HDOHVSpjlZBTKSmFtQ6hXrPg=";
    }
  };

  //Form layout and buttons
  return (
    <form onSubmit={runCheck}>
      <label htmlFor="guessbox">Enter a color:</label>
      <input id="guessBox" type="text" />
      <button type="submit" onclick="runCheck()">
        Submit Guess
      </button>
    </form>
  );
}

export default Form;
