import React, { FC } from "react";
import { usePokemon } from "../../hooks/usePokemon";
import PokemonForm from "./pokemon-form/PokemonForm";
import { Grid } from "@mui/material";
import Info from "../../components/Info";

const PokemonEdit: FC = () => {
  const { pokemon, loading, error, name } = usePokemon();

  return (
    <Grid container flexDirection={"column"} alignItems={"center"} gap={2}>
      {pokemon && (
        <>
          <h1>{name} details</h1>
          <img src={pokemon.images.small} alt={pokemon.name} />
          <PokemonForm values={{ ...pokemon }} />
        </>
      )}

      {!pokemon && !loading && <Info>No data...</Info>}
      {loading && <Info>Loading...</Info>}
      {error && <Info>Error...</Info>}
    </Grid>
  );
};

export default PokemonEdit;
