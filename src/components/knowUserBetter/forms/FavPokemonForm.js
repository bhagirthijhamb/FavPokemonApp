import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "./InputField";
import Pokemons from "../pokemon/Pokemons";
import classes from "./FavPokemonForm.module.css";

const FavPokemonForm = (props) => {
  const {
    formField: { pokemon },
    setFieldValue,
  } = props;

  return (
    <>
      <Typography component="h2" variant="h5" align="left" marginBottom={1}>
        Pick your favourite Pokemon
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            name={pokemon.name}
            label={pokemon.label}
            fullWidth
            marginBottom={4}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={3}>
        <Pokemons setFieldValue={setFieldValue} />
      </Grid>
    </>
  );
};

export default FavPokemonForm;
