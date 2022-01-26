import React, { FC } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AppRoute } from "../../../app-routes/AppRoutes";
import { Datum } from "../../../types/api";

export type PokemonDetailsPanel = {
  pokemon: Datum;
};

const PokemonDetailsPanel: FC<PokemonDetailsPanel> = ({ pokemon }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>{pokemon.name} details</h1>
      <Grid container gap={2} flexDirection={"column"} alignItems={"center"}>
        <img src={pokemon.images.small} alt={pokemon.name} />
        <Typography fontSize={24} fontWeight={"bold"}>
          HP:
        </Typography>
        <Typography fontSize={24}>{pokemon.hp}</Typography>
        <Typography fontSize={24} fontWeight={"bold"}>
          Level:
        </Typography>
        <Typography fontSize={24}>{pokemon.level}</Typography>
        <Typography fontSize={24} fontWeight={"bold"}>
          Ratity:
        </Typography>
        <Typography fontSize={24}>{pokemon.rarity}</Typography>
        <Button
          component={Link}
          to={`${AppRoute.PokemonEdit}/${pokemon.id}`}
          variant={"contained"}
        >
          Edit
        </Button>
        <Button
          variant={"contained"}
          color={"warning"}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Grid>
    </>
  );
};

export default PokemonDetailsPanel;
