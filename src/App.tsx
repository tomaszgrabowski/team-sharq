import React, { useEffect } from "react";
import AppRoutes from "./app-routes/AppRoutes";
import { useDispatch } from "react-redux";
import { SetPokemons } from "./store/pokemon/pokemon-actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetPokemons());
  }, []);
  return <AppRoutes />;
};

export default App;
