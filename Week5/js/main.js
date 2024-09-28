let items = [
  "sunscreen",
  "boogie board",
  "phone",
  "camera",
  "flip-flops",
  "shorts",
  "bug spray",
  "socks",
];

let list = document.querySelector("#div-list");

for (let item of items) {
  let newElement = document.createElement("input");
  newElement.type = "checkbox";
  newElement.id = item;
  newElement.addEventListener("click", update);

  let label = document.createElement("label");
  label.innerHTML = item;
  label.htmlFor = item;

  list.append(newElement);
  list.append(label);
}

function update() {
  let tally = document.querySelector("#tally");
  let value = 0;

  for (let item of items) {
    if (document.getElementById(item).checked == true) {
      value++;
    }
  }

  tally.innerHTML = value;
}
