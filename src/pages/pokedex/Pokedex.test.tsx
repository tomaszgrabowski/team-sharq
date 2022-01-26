import React from "react";
import Pokedex from "./Pokedex";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testHelpers";
import { cards, mockedStore } from "../../mocked-data";

describe("Pokedex", () => {
  it("should contain header", () => {
    renderWithProviders(<Pokedex />, mockedStore);
    screen.getByText("Pokedex");
  });
  describe("when there is any pokemon ready to fight", () => {
    it("should render fight arena thumbnail", () => {
      renderWithProviders(<Pokedex />, {
        ...mockedStore,
        pokemons: { ...mockedStore.pokemons, fightArena: [cards[0], cards[1]] },
      });
      screen.getByTestId("arena-thumbnail");
    });
  });
  describe("when there no pokemon ready to fight", () => {
    it("should not render fight arena thumbnail", () => {
      renderWithProviders(<Pokedex />, {
        ...mockedStore,
        pokemons: { ...mockedStore.pokemons, fightArena: [] },
      });
      expect(screen.queryByTestId("arena-thumbnail")).not.toBeInTheDocument();
    });
  });

  describe("when there are pokemons", () => {
    it("should render pokemons list", () => {
      renderWithProviders(<Pokedex />, mockedStore);
      screen.getByTestId("pokemon-list");
      //move lines below to separate "PokemonList" test (just for sanity check for now)
      const pokemons = screen.queryAllByTestId("pokemon");
      expect(pokemons.length).toBe(250);
    });
  });
  describe("when there are no pokemons", () => {
    it("should render no data indicator", () => {
      renderWithProviders(<Pokedex />, {
        ...mockedStore,
        pokemons: { ...mockedStore.pokemons, pokemons: [] },
      });
      screen.getByText("No data...");
    });
  });
  describe("when pokemons loading", () => {
    it("should render loading indicator", () => {
      renderWithProviders(<Pokedex />, {
        ...mockedStore,
        pokemons: { ...mockedStore.pokemons, loading: true, pokemons: [] },
      });
      screen.getByText("Loading...");
    });
  });
  describe("when there is an error", () => {
    it("should not render error indicator", () => {
      renderWithProviders(<Pokedex />, {
        ...mockedStore,
        pokemons: { ...mockedStore.pokemons, error: "Error...", pokemons: [] },
      });
      screen.getByText("Error...");
    });
  });
});
