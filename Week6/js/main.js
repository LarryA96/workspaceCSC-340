//Connect event listener to text box
let search = document.querySelector("#txt-predict");
search.addEventListener("keyup", predict);

//Array containing image names
let images = ["dog", "cat", "snake", "snowboard", "ball", "beetle"];

//Match text to image in database
function predict() {
  //Convert search value to all lowercase for comparison
  let value = search.value;
  value.replaceAll(" ", "");
  value = value.toLowerCase();
  for (let image of images) {
    if (image == value) {
      document.querySelector("#img-predict").src = "images/" + image + ".png";
      break;
    } else {
      document.querySelector("#img-predict").src = "images/notFound.png";
    }
  }
}
