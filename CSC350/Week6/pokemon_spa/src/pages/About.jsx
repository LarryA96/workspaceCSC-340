import React from "react";
import ImageCard from "../components/ImageCard";

function About() {
  return (
    <div className="container mt-4">
      <h1>Unova Starters</h1>
      <p>
        Players began their journey by choosing one of three starter Pokémon:
        Snivy (Grass), Tepig (Fire), or Oshawott (Water). Each evolves twice,
        offering unique strategies and playstyles.
      </p>

      <div className="d-flex flex-wrap gap-3">
        <ImageCard
          src="https://img.pokemondb.net/artwork/snivy.jpg"
          alt="Snivy"
          caption="Snivy — the Grass Snake Pokémon"
        />
        <ImageCard
          src="https://img.pokemondb.net/artwork/tepig.jpg"
          alt="Tepig"
          caption="Tepig — the Fire Pig Pokémon"
        />
        <ImageCard
          src="https://img.pokemondb.net/artwork/oshawott.jpg"
          alt="Oshawott"
          caption="Oshawott — the Sea Otter Pokémon"
        />
      </div>
    </div>
  );
}

export default About;
