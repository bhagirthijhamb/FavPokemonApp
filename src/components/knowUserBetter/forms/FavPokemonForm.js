import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputField from "./InputField";
import Pokemons from "../pokemon/Pokemons";
import Filters from "./Filters";
import Pagination from "./../../ui/Pagination";
import classes from "./FavPokemonForm.module.css";

let PageSize = 12;

const FavPokemonForm = (props) => {
  // pokemon list
  const [pokemons, setPokemons] = useState([]);
  // Detailed data for the pokemons
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  const [typeFilteredPokemonData, setTypeFilteredPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("all types");
  const [searchValue, setSearchValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

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
      return pokemon.name.includes(searchValue);
    });
    setPokemonData(filteredPokemons);
  }, [searchValue, typeFilteredPokemonData]);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return pokemonData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pokemonData]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography component="h3" variant="h5" align="left" gutterBottom>
            Pick your favourite Pokemon
          </Typography>
          <InputField name={pokemon.name} label={pokemon.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            component="h3"
            variant="h5"
            align="left"
            paddingLeft={3}
            gutterBottom
          >
            Filters
          </Typography>
          <Filters
            types={types}
            pokemonType={pokemonType}
            onTypeChange={typeChangeHandler}
            searchValue={searchValue}
            onSearch={searchPokemonHandler}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={1}>
        <Pokemons
          pokemons={pokemons}
          pokemonType={pokemonType}
          setPokemons={setPokemons}
          pokemonData={pokemonData}
          currentData={currentData}
          setAllPokemonData={setAllPokemonData}
          setPokemonData={setPokemonData}
          setFieldValue={setFieldValue}
          searchValue={searchValue}
        />
      </Grid>
      <Grid
        container
        spacing={2}
        marginTop={2}
        className={classes.paginationContainer}
      >
        <Pagination
          className={classes.paginationBar}
          currentPage={currentPage}
          totalCount={pokemonData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Grid>
    </>
  );
};

FavPokemonForm.propTypes = {
  formField: PropTypes.object,
  setFieldValue: PropTypes.func,
};

export default FavPokemonForm;
