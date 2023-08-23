import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPokemonData } from "../../store/pokemonActions";
import PokemonCard from "../../components/PokemonCard";

import "./ProductListingPage.css";

function ProductListingPage() {
  const dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => state.pokemonList);

  useEffect(() => {
    if (pokemonDetails.length === 0) {
      dispatch(fetchPokemonData());
    }
  }, [dispatch]);
  console.log(pokemonDetails);
  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-card-grid">
        {pokemonDetails?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
