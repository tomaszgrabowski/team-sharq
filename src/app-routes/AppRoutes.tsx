import React, { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Pokedex from "../pages/pokedex/Pokedex";
import PokemonDetails from "../pages/pokemon-details/PokemonDetails";
import PokemonEdit from "../pages/pokemon-edit/PokemonEdit";
import FightArena from "../pages/figth-arena/FightArena";

const AppRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Pokedex />} path={AppRoute.Pokedex} />
        <Route
          element={<PokemonDetails />}
          path={`${AppRoute.PokemonDetails}/:id`}
        />
        <Route element={<PokemonEdit />} path={`${AppRoute.PokemonEdit}/:id`} />
        <Route element={<FightArena />} path={`${AppRoute.Fight}/:idA/:idB`} />
        <Route path={"*"} element={<Navigate to={AppRoute.Pokedex} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

export enum AppRoute {
  Pokedex = "/",
  PokemonDetails = "/pokemon",
  PokemonEdit = "/pokemon/edit",
  Fight = "/fight-arena",
}
