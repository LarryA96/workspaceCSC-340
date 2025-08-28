import Image from "../components/Image";

//Create home page
function Home() {
  return (
    <div id="home" class="container row justify-content-center">
      <h1>Welcome to Unova!</h1>
      <p>
        I'll be using this project to get more familiar <br /> with Bootstrap 5.
      </p>
      <Image
        src="https://img.pokemondb.net/artwork/snivy.jpg"
        alt="Snivy"
        caption='Snivy — The "Grass Snake" Pokémon'
      />
      <Image
        src="https://img.pokemondb.net/artwork/tepig.jpg"
        alt="Tepig"
        caption='Tepig — The "Fire Pig" Pokémon'
      />
      <Image
        src="https://img.pokemondb.net/artwork/oshawott.jpg"
        alt="Oshawott"
        caption='Oshawott — The "Sea Otter" Pokémon'
      />
    </div>
  );
}

export default Home;
