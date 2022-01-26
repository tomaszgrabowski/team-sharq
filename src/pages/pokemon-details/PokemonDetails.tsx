import React, { FC } from "react";
import { usePokemon } from "../../hooks/usePokemon";
import { Grid } from "@mui/material";
import PokemonDetailsPanel from "./pokemon-details-panel/PokemonDetailsPanel";

const PokemonDetails: FC = () => {
  const { pokemon, loading, error, name } = usePokemon();
  return (
    <Grid container direction={"column"} alignItems={"center"}>
      {pokemon && <PokemonDetailsPanel pokemon={pokemon} />}
      {!pokemon && !loading && <>No data...</>}
      {loading && <>Loading...</>}
      {error && <>Error...</>}
    </Grid>
  );
};

export default PokemonDetails;
