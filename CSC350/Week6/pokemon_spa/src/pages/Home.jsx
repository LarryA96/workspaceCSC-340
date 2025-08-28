import React from "react";
import ImageCard from "../components/ImageCard";

function Home() {
  return (
    <div className="container mt-4">
      <h1>Pokémon Generation 5 — Unova Region</h1>
      <p>
        Generation 5 introduced <strong>156 new Pokémon</strong> — the largest
        single-generation addition — debuting in <em>Pokémon Black</em> and{" "}
        <em>White</em>. Set in the Unova region, it featured a fresh Pokédex
        with no returning species until the post-game.
      </p>

      <ImageCard
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEr1Mpg5G088jGZZY8YNIJBt92h6g8UB4og&s"
        alt="Unova Region Map"
        caption="The Unova region — inspired by New York City and its surroundings."
      />
    </div>
  );
}

export default Home;
