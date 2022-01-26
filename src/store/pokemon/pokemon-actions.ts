import { Dispatch } from "redux";
import { get } from "../../api/api";
import { Action } from "../../types/action";
import { ApiResponse, Datum } from "../../types/api";
import { PokemonEditableValues } from "../../types/pokemon-editable-values";

export enum PokemonsActionType {
  POKEMONS_LOADING = `[POKEMONS] POKEMONS Loading`,
  POKEMONS_LOADED = `[POKEMONS] POKEMONS Loaded`,
  POKEMONS_ERROR = `[POKEMONS] POKEMONS Error`,
  POKEMON_EDIT = `[POKEMONS] POKEMON Edit`,
  POKEMON_PICK_FIGHTER = `[POKEMONS] POKEMON Pick Fighters`,
  POKEMON_CLEAR_ARENA = `[POKEMONS] POKEMON Clear Arena`,
}

export const SetPokemons =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(PokemonsLoading());
      const apiResult = await get<ApiResponse>("cards");
      dispatch(
        PokemonsLoaded(
          apiResult.data.data.sort((a, b) => a.name.localeCompare(b.name))
        )
      );
    } catch (err: any) {
      dispatch(PokemonsError(err.message));
    }
  };

export const PokemonsLoading = (): Action => ({
  type: PokemonsActionType.POKEMONS_LOADING as PokemonsActionType.POKEMONS_LOADING,
});

export const PokemonsLoaded = (payload: Datum[]): Action => ({
  type: PokemonsActionType.POKEMONS_LOADED as PokemonsActionType.POKEMONS_LOADED,
  payload: payload,
});

export const PokemonsError = (error: string): Action => ({
  type: PokemonsActionType.POKEMONS_ERROR as PokemonsActionType.POKEMONS_ERROR,
  payload: error,
});

export const PokemonEdit = (payload: PokemonEditableValues): Action => ({
  type: PokemonsActionType.POKEMON_EDIT as PokemonsActionType.POKEMON_EDIT,
  payload,
});

export const PokemonPickFighters = (payload: Datum[]): Action => ({
  type: PokemonsActionType.POKEMON_PICK_FIGHTER as PokemonsActionType.POKEMON_PICK_FIGHTER,
  payload,
});

export const PokemonClearArena = (): Action => ({
  type: PokemonsActionType.POKEMON_CLEAR_ARENA as PokemonsActionType.POKEMON_CLEAR_ARENA,
});

export type PokemonsActions = ReturnType<
  | typeof PokemonsLoading
  | typeof PokemonsLoaded
  | typeof PokemonsError
  | typeof PokemonEdit
  | typeof PokemonClearArena
>;
