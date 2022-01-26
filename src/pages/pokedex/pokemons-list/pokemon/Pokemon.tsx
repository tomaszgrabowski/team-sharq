import React, { FC } from "react";
import { Checkbox, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../../app-routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { Datum } from "../../../../types/api";
import { PokemonPickFighters } from "../../../../store/pokemon/pokemon-actions";
import { AppState } from "../../../../store/AppState";
import { PokemonsState } from "../../../../store/pokemon/pokemon-reducer";

export type PokemonProps = {
  pokemon: Datum;
};

const Pokemon: FC<PokemonProps> = ({ pokemon }) => {
  const { fightArena } = useSelector<AppState, PokemonsState>(
    (state) => state.pokemons
  );
  const dispatch = useDispatch();
  const pushToFightArena = (pokemon: Datum, picked: boolean) => {
    if (picked) {
      dispatch(PokemonPickFighters([...fightArena, pokemon]));
    } else {
      dispatch(
        PokemonPickFighters([...fightArena.filter((p) => p !== pokemon)])
      );
    }
  };
  const isArenaFull = () => fightArena.length >= 2;

  const isPokemonOnArena = (pokemon: Datum) => fightArena.includes(pokemon);
  return (
    <Grid
      item
      key={pokemon.id}
      flexDirection={"column"}
      data-testid={"pokemon"}
    >
      <Grid container flexDirection={"column"} alignItems={"center"}>
        <Link to={`${AppRoute.PokemonDetails}/${pokemon.id}`}>
          <img src={pokemon.images.small} alt={pokemon.id} />
        </Link>
        <span>
          <Checkbox
            disabled={isArenaFull() && !isPokemonOnArena(pokemon)}
            onChange={(e) => pushToFightArena(pokemon, e.target.checked)}
            checked={isPokemonOnArena(pokemon)}
          />
          I pick you {pokemon.name}!
        </span>
      </Grid>
    </Grid>
  );
};

export default Pokemon;
