import { carOfTheWeek } from "../data";

//Format data into a bootstrap card
export default function CarOfTheWeek() {
  return (
    <div class="container mt-4">
      <h2>Car of the Week</h2>
      <div class="card" style={{ width: "40vw" }}>
        <img
          src={carOfTheWeek.image}
          class="card-img-top"
          alt={carOfTheWeek.name}
        />
        <div class="card-body">
          <h5 class="card-title">{carOfTheWeek.name}</h5>
          <p class="card-text">{carOfTheWeek.description}</p>
          <p class="card-text">{carOfTheWeek.specs}</p>
        </div>
      </div>
    </div>
  );
}
