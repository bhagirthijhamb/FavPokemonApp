import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "./InputField";
import Pokemons from "../pokemon/Pokemons";
import Filters from "./Filters";
import classes from "./FavPokemonForm.module.css";

const FavPokemonForm = (props) => {
  // pokemon list
  const [pokemons, setPokemons] = useState([]);
  // Detailed data for the pokemons
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  const [typeFilteredPokemonData, setTypeFilteredPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("all types");
  const [searchValue, setSearchValue] = useState("");

  const {
    formField: { pokemon },
    setFieldValue,
  } = props;

  const types = [
    "all types",
    "grass",
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water",
  ];

  // Type filter change handler
  function typeChangeHandler(e) {
    setPokemonType(e.target.value);

    if (e.target.value === "all types") {
      setPokemonData(allPokemonData);
      setTypeFilteredPokemonData(allPokemonData);
    } else {
      const filteredPokemons = allPokemonData.filter((pokemon) => {
        const typesArr = pokemon.types.map((obj) => obj["type"].name);
        return typesArr.includes(e.target.value);
      });
      setPokemonData(filteredPokemons);
      setTypeFilteredPokemonData(filteredPokemons);
    }
  }

  // Search filter change handler
  function searchPokemonHandler(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    const filteredPokemons = typeFilteredPokemonData.filter((pokemon) => {
      console.log(searchValue);
      return pokemon.name.includes(searchValue);
    });
    setPokemonData(filteredPokemons);
  }, [searchValue, typeFilteredPokemonData]);

  return (
    <>
      <Typography component="h2" variant="h5" align="left">
        Pick your favourite Pokemon
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={pokemon.name} label={pokemon.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Filters
            types={types}
            pokemonType={pokemonType}
            onTypeChange={typeChangeHandler}
            searchValue={searchValue}
            onSearch={searchPokemonHandler}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={3}>
        <Pokemons
          pokemons={pokemons}
          setPokemons={setPokemons}
          pokemonData={pokemonData}
          setAllPokemonData={setAllPokemonData}
          setPokemonData={setPokemonData}
          setFieldValue={setFieldValue}
        />
      </Grid>
    </>
  );
};

export default FavPokemonForm;
