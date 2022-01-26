import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store/AppState";
import { PokemonsState } from "../../store/pokemon/pokemon-reducer";
import Info from "../../components/Info";
import PokemonsList from "./pokemons-list/PokemonsList";
import { Grid } from "@mui/material";
import ArenaThumbnail from "./arena-thumbnail/ArenaThumbnail";

const Pokedex: FC = () => {
  const { error, loading, pokemons, fightArena } = useSelector<
    AppState,
    PokemonsState
  >((state) => state.pokemons);
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (fightArena.length === 2) {
      ref.current?.focus();
    }
  }, [fightArena]);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <h1 ref={ref}>Pokedex</h1>
      {fightArena.length > 0 && <ArenaThumbnail />}
      {pokemons.length > 0 && <PokemonsList />}
      {loading && <Info>Loading...</Info>}
      {error && <Info>{error}</Info>}
      {pokemons.length === 0 && !loading && <Info>No data...</Info>}
    </Grid>
  );
};

export default Pokedex;
