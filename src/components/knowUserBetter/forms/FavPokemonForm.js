import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "./InputField";

import PokemonCard from "../pokemon/PokemonCard";

const FavPokemonForm = (props) => {
  const {
    formField: { pokemon },
    setFieldValue,
  } = props;

  const dummyPokemons = [
    {
      id: 1,
      name: "bulbasaur",
    },
    {
      id: 2,
      name: "ivysaur",
    },
    {
      id: 3,
      name: "venusaur",
    },
    {
      id: 4,
      name: "charmander",
    },
    {
      id: 5,
      name: "charmeleon",
    },
    {
      id: 6,
      name: "charizard",
    },
  ];

  const pokemonCards = dummyPokemons.map((item) => (
    <Grid item xs={4} key={item.id}>
      <PokemonCard name={item.name} setFieldValue={setFieldValue} />
    </Grid>
  ));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        User Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={pokemon.name} label={pokemon.label} fullWidth />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {pokemonCards}
      </Grid>
    </>
  );
};

export default FavPokemonForm;
