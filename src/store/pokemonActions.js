import { createAction } from "@reduxjs/toolkit";

export const setPokemonList = createAction("pokemon/setList");
export const fetchPokemonData = createAction("FETCH_POKEMON_DATA");
