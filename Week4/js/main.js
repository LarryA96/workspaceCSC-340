//Take the value of all fields when button is clicked
document.querySelector("#Submit").addEventListener("click", function () {
  filled(
    document.querySelector("#Name").value,
    document.querySelector("#Phone").value,
    document.querySelector("#Description").value
  );
});

//If any value is empty, alert
function filled(name, phone, description) {
  if (name == "" || phone == "" || description == "") {
    document.querySelector("p").style.display = "block";
    document.querySelector("#report").style.display = "none";
  }
  //If values are filled, create object and give user confirmation
  else {
    let item = new Lost(name, phone, description);
    document.querySelector("#report").innerHTML = `Thank you ${
      item.username.split(" ")[0]
    }, a representative will be calling you at ${
      item.phone
    } within one business day.
    Description given: ${item.description}`;
    document.querySelector("#report").style.display = "block";
    document.querySelector("p").style.display = "none";
    document.querySelector("#Name").value = "";
    document.querySelector("#Phone").value = "";
    document.querySelector("#Description").value = "";
  }
}

//Lost item Object Constructot
function Lost(name, phone, description) {
  this.username = name;
  this.phone = phone;
  this.description = description;
}
