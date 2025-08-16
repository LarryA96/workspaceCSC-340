/*
Name: Larry Alston
Assignment: Week 2 Assignment - JSON and Bootstrap
Due Date: July 23, 2025
 */

//Create object that stores questions
let questions = {
  "How many Pokemon are in generation 1's Pokedex?": "151",
  "What year was Pokemon Sun and Pokemon Moon released?":
    "Pokemon Sun and Moon saw simultaneous national release on November 18, 2016",
  "What is the name of the male protagonist in Pokemon SoulSilver?": "Ethan",
};

//Create array of image links
let images = [
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Pok%C3%A9mon_Mew_art.png/250px-Pok%C3%A9mon_Mew_art.png",
  "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-sun-moon/sun-moon-169-en.jpg",
  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1vTvRV.img?w=768&h=384&m=6",
];

//Counter for looping through html IDs
let item = 1;

//Loop through object and assign {Key:Value} to html elements
for (let question in questions) {
  let qElement = document.getElementById(`question${item}`);
  let aElement = document.getElementById(`answer${item}`);

  qElement.innerHTML = question;
  aElement.innerHTML = questions[question];
  item++;
}

//Add images to the answer sections
for (let i = 0; i < 3; i++) {
  //create image element
  let img = document.createElement("img");
  img.src = images[i];
  img.id = `image${i + 1}`;

  //add element to corresponding answer segment
  document.getElementById(`answer${i + 1}`).append(img);
}
