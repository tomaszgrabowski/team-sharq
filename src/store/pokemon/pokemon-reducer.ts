import { Datum } from "../../types/api";
import { PokemonsActions, PokemonsActionType } from "./pokemon-actions";

export type PokemonsState = {
  pokemons: readonly Datum[];
  loading: boolean;
  error: string | undefined;
  fightArena: readonly Datum[];
};

const initialState: PokemonsState = {
  pokemons: [],
  error: undefined,
  loading: false,
  fightArena: [],
};

export const PokemonReducer = (
  state: PokemonsState = initialState,
  action: PokemonsActions
): PokemonsState => {
  switch (action.type) {
    case PokemonsActionType.POKEMONS_LOADING:
      return {
        loading: true,
        error: undefined,
        pokemons: [],
        fightArena: [],
      };
    case PokemonsActionType.POKEMONS_ERROR:
      return {
        loading: false,
        error: action.payload,
        pokemons: [],
        fightArena: [],
      };
    case PokemonsActionType.POKEMONS_LOADED:
      return {
        loading: false,
        error: undefined,
        pokemons: action.payload,
        fightArena: [],
      };
    case PokemonsActionType.POKEMON_EDIT:
      let pokemon = state.pokemons.find(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (pokemon) {
        const pokemons = [...state.pokemons];
        const indexOf = pokemons.indexOf(pokemon);
        pokemons[indexOf] = { ...pokemon, ...action.payload };
        return {
          ...state,
          pokemons: pokemons,
        };
      }
      return { ...state };
    case PokemonsActionType.POKEMON_PICK_FIGHTER:
      return {
        ...state,
        fightArena: action.payload,
      };
    case PokemonsActionType.POKEMON_CLEAR_ARENA:
      console.log("hit");
      return {
        ...state,
        fightArena: [],
      };
    default:
      return state;
  }
};
