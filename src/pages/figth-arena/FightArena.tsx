import React, { FC, useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store/AppState";
import { PokemonsState } from "../../store/pokemon/pokemon-reducer";
import { AppRoute } from "../../app-routes/AppRoutes";
import { Datum } from "../../types/api";

const FightArena: FC = () => {
  const [pokemonA, setPokemonA] = useState<Datum | undefined>(undefined);
  const [pokemonB, setPokemonB] = useState<Datum | undefined>(undefined);
  const [winner, setWinner] = useState("");

  const { idA, idB } = useParams<{ idA: string; idB: string }>();
  const { error, loading, pokemons } = useSelector<AppState, PokemonsState>(
    (state) => state.pokemons
  );
  const navigate = useNavigate();
  useEffect(() => {
    const _pokemonA = pokemons.find((pokemon) => pokemon.id === idA);
    const _pokemonB = pokemons.find((pokemon) => pokemon.id === idB);
    setPokemonA(_pokemonA);
    setPokemonB(_pokemonB);
    if (_pokemonA && _pokemonB) {
      setWinner(getWinner(_pokemonA, _pokemonB));
    }
  }, [idA, idB, pokemons]);

  return (
    <Grid
      container
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={2}
    >
      <h1>Fight Arena</h1>
      {pokemonA && pokemonB && (
        <>
          <Grid container justifyContent={"center"} gap={2}>
            {pokemonA && (
              <Grid item>
                <img src={pokemonA.images.small} alt={pokemonA.name} />
              </Grid>
            )}
            {pokemonB && (
              <Grid item>
                <img src={pokemonB.images.small} alt={pokemonB.name} />
              </Grid>
            )}
          </Grid>
          <Typography fontSize={24} fontWeight={"bold"}>
            Winner: {winner}
          </Typography>
          <Button
            variant={"contained"}
            onClick={() => navigate(AppRoute.Pokedex)}
          >
            Back
          </Button>
        </>
      )}

      {(!pokemonA || !pokemonB) && !loading && <>No data...</>}
      {loading && <>Loading...</>}
      {error && <>Error...</>}
    </Grid>
  );
};

export default FightArena;

const getWinner = (pokemonA: Datum, pokemonB: Datum) => {
  if (pokemonA.hp > pokemonB.hp) {
    return pokemonA.name;
  }
  if (pokemonB.hp > pokemonA.hp) {
    return pokemonB.name;
  }
  return "Draw!";
};
