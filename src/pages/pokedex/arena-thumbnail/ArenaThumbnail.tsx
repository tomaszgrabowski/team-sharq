import React, { FC } from "react";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/AppState";
import { PokemonsState } from "../../../store/pokemon/pokemon-reducer";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../../app-routes/AppRoutes";
import { PokemonClearArena } from "../../../store/pokemon/pokemon-actions";

const ArenaThumbnail: FC = () => {
  const { fightArena } = useSelector<AppState, PokemonsState>(
    (state) => state.pokemons
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToArena = () =>
    navigate(`${AppRoute.Fight}/${fightArena[0].id}/${fightArena[1].id}`);
  const isArenaFull = () => fightArena.length >= 2;
  const clearArena = () => dispatch(PokemonClearArena());
  return (
    <Grid
      data-testid={"arena-thumbnail"}
      container
      direction={"column"}
      marginBottom={10}
      alignItems={"center"}
    >
      <Grid container justifyContent={"center"} marginBottom={10} gap={2}>
        {fightArena.map((pokemon) => (
          <Grid item key={pokemon.id}>
            <img
              key={pokemon.id}
              src={pokemon.images.small}
              alt={pokemon.name}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container gap={2} justifyContent={"center"}>
        {fightArena.length >= 2 && (
          <Button
            variant={"contained"}
            disabled={!isArenaFull()}
            onClick={navigateToArena}
          >
            Send to arena
          </Button>
        )}
        <Button variant={"contained"} color={"warning"} onClick={clearArena}>
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default ArenaThumbnail;
