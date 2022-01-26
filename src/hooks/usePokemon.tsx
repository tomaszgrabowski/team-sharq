import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../store/AppState";
import { PokemonsState } from "../store/pokemon/pokemon-reducer";

export const usePokemon = () => {
  const { id } = useParams<{ id: string }>();
  const { error, loading, pokemons } = useSelector<AppState, PokemonsState>(
    (state) => state.pokemons
  );
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);

  return {
    pokemon,
    error,
    loading,
    name: pokemon?.name,
  };
};
