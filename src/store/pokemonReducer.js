import { createReducer } from "@reduxjs/toolkit";

import { setPokemonList } from "./pokemonActions";

const initialState = [];

const pokemonReducer = createReducer(initialState, {
  [setPokemonList]: (state, action) => action.payload,
});

export default pokemonReducer;
