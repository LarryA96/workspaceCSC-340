import animals from "./data";
import Image from "./utils";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Animal Facts</h1>
        <br />
        <div class="card" /*animal card*/>
          <div class="imageCon">
            <Image link={animals.img1} desc={animals.desc1} />
          </div>
          <h2>{animals.name1}</h2>
          <p>{animals.fact1}</p>
        </div>
      </div>
      <div>
        <div class="card" /*animal card*/>
          <div class="imageCon">
            <Image link={animals.img2} desc={animals.desc2} />
          </div>
          <h2>{animals.name2}</h2>
          <p>{animals.fact2}</p>
        </div>
        <div>
          <div class="card" /*animal card*/>
            <div class="imageCon">
              <Image link={animals.img3} desc={animals.desc3} />
            </div>
            <h2>{animals.name3}</h2>
            <p>{animals.fact3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
