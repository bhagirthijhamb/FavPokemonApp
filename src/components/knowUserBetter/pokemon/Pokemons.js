import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { getPokemons, getPokemonData } from "./../../../api/api";
import PokemonCard from "./PokemonCard";

const Pokemons = ({
  pokemons,
  setPokemons,
  pokemonData,
  setPokemonData,
  setFieldValue,
  setAllPokemonData,
  currentData,
  pokemonType,
}) => {
  const [favPokemon, setFavPokemon] = useState("");
  const offset = 0;
  const limit = 100;

  useEffect(() => {
    async function getPokemonList() {
      const pokemonList = await getPokemons(limit, offset);
      setPokemons(pokemonList.results);
    }

    getPokemonList();
  }, [limit, offset, setPokemons]);

  useEffect(() => {
    async function getDetailedPokemonData() {
      const detailedPokemonData = await getPokemonData(pokemons);
      detailedPokemonData.sort((a, b) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      );
      setAllPokemonData(detailedPokemonData);
      setPokemonData(detailedPokemonData);
    }

    getDetailedPokemonData();
  }, [pokemons, setAllPokemonData, setPokemonData]);

  const pokemonCards =
    pokemons.length && pokemonType !== "all types"
      ? pokemonData.map((item) => {
          return (
            <Grid item xs={6} md={3} lg={3} key={item.id}>
              <PokemonCard
                pokemonData={item}
                setFieldValue={setFieldValue}
                favPokemon={favPokemon}
                setFavPokemon={setFavPokemon}
              />
            </Grid>
          );
        })
      : currentData.map((item) => {
          return (
            <Grid item xs={6} md={3} lg={3} key={item.id}>
              <PokemonCard
                pokemonData={item}
                setFieldValue={setFieldValue}
                favPokemon={favPokemon}
                setFavPokemon={setFavPokemon}
              />
            </Grid>
          );
        });

  return <>{pokemonCards} </>;
};

PokemonCard.propTypes = {
  pokemons: PropTypes.object,
  setPokemons: PropTypes.func,
  pokemonData: PropTypes.object,
  setPokemonData: PropTypes.func,
  setFieldValue: PropTypes.func,
  setAllPokemonData: PropTypes.func,
  currentData: PropTypes.object,
  pokemonType: PropTypes.string,
};

export default Pokemons;
