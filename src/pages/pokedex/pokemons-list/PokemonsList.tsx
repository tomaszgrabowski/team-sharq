import React, { FC } from "react";
import { Checkbox, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../app-routes/AppRoutes";
import { Datum } from "../../../types/api";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import { PokemonsState } from "../../../store/pokemon/pokemon-reducer";
import { PokemonPickFighters } from "../../../store/pokemon/pokemon-actions";
import Pokemon from "./pokemon/Pokemon";

const PokemonsList: FC = () => {
  const { pokemons } = useSelector<AppState, PokemonsState>(
    (state) => state.pokemons
  );

  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={4}
      justifyContent={"center"}
      data-testid={"pokemon-list"}
    >
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </Grid>
  );
};

export default PokemonsList;
