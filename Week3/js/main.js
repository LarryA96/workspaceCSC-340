//Create lists of animal names
let favs = ["Falcons", "Sharks", "Turtles", "Crabs", "Snakes"];
let fears = ["Spiders", "Cockroaches", "Maggots", "Piranhas", "Koala"];

//Identify divs
let divFavs = document.getElementById("divFavs");
let divFear = document.getElementById("divFear");

//Create lists
let favList = document.createElement("ul");
let fearList = document.createElement("ul");

//Center the two lists
[favList.style.margin, fearList.style.margin] = Array(2).fill("auto");
[favList.style.width, fearList.style.width] = Array(2).fill("80px");

//Add the lists to their respective container
divFavs.append(favList);
divFear.append(fearList);

//Write animal names into each list
for (let item of favs) {
  let newItem = document.createElement("li");
  newItem.innerHTML = item;
  favList.append(newItem);
}

for (let item of fears) {
  let newItem = document.createElement("li");
  newItem.innerHTML = item;
  fearList.append(newItem);
}
