import { useState } from "react";

export default function CarsList() {
  //states to monitor existing list and new additions
  const [cars, setCars] = useState("");
  const [newCar, setNewCar] = useState("");

  //function to add car to list
  const addCar = (e) => {
    e.preventDefault();
    if (newCar.trim()) {
      setCars([...cars, { id: cars.length + 1, name: newCar }]);
      setNewCar("");
    }
  };

  //function to clear list
  const clearCar = () => {
    setCars("");
    return null;
  };

  //Render only the form on initial load
  //Once items added to list, render list after form
  if (cars.length == 0) {
    return (
      <div class="container mt-4">
        <h2>Add Your Favorite Cars To The List!</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5NB6XlG-l8ARGECyVwvLpZgvAeOQu-TvWQ&s"></img>

        <form onSubmit={addCar} class="d-flex">
          <input
            class="form-control me-2"
            value={newCar}
            onChange={(e) => setNewCar(e.target.value)}
            placeholder="Add a new car"
          />
          <button class="btn btn-primary">Add</button>
          <button class="btn btn-secondary" onClick={clearCar}>
            Clear
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div class="container mt-4">
        <h2>Add Your Favorite Cars To The List!</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ5NB6XlG-l8ARGECyVwvLpZgvAeOQu-TvWQ&s"></img>
        <form onSubmit={addCar} class="d-flex">
          <input
            class="form-control me-2"
            value={newCar}
            onChange={(e) => setNewCar(e.target.value)}
            placeholder="Add a new car"
          />
          <button class="btn btn-primary">Add</button>
          <button class="btn btn-secondary" onClick={clearCar}>
            Clear
          </button>
        </form>

        <ul class="list-group mb-3">
          {cars.map((car) => (
            <li class="list-group-item" key={car.id}>
              {car.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
