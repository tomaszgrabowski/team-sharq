import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { PokemonReducer } from "./pokemon/pokemon-reducer";

const rootReducer = combineReducers({
  pokemons: PokemonReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof rootReducer>;
