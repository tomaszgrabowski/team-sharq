import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { PokemonEditableValues } from "../../../types/pokemon-editable-values";
import { useNavigate } from "react-router-dom";
import { AppRoute } from "../../../app-routes/AppRoutes";
import { useDispatch } from "react-redux";
import { PokemonEdit } from "../../../store/pokemon/pokemon-actions";
import { Button, Grid, TextField } from "@mui/material";

export type PokemonFormProps = {
  values: PokemonEditableValues;
};

const PokemonForm: FC<PokemonFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ defaultValues: props.values });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: PokemonEditableValues) => {
    dispatch(PokemonEdit(data));
    navigate(-1);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container flexDirection={"column"} gap={2} alignItems={"center"}>
        <TextField
          placeholder="Hp"
          label="Hp"
          type="text"
          helperText={errors.hp?.message}
          {...register("hp", {
            required: { value: true, message: "Hp is a required value!" },
          })}
        />
        <TextField
          type="text"
          placeholder="Level"
          label="Level"
          helperText={errors.level?.message}
          {...register("level", {
            required: { value: true, message: "Level is a required value!" },
          })}
        />
        <TextField
          type="text"
          placeholder="Rarity"
          label="Rarity"
          helperText={errors.rarity?.message}
          {...register("rarity", {
            required: { value: true, message: "Rarity is a required value!" },
          })}
        />
        <Button variant={"contained"} type="submit">
          Save
        </Button>
        <Button
          color={"warning"}
          variant={"contained"}
          type="submit"
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
      </Grid>
    </form>
  );
};

export default PokemonForm;
