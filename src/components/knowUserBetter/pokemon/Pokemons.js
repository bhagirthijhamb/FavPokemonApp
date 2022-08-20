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
            <Grid item xs={3} key={item.id}>
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
            <Grid item xs={3} key={item.id}>
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
  pokemons: PropTypes.object.isRequired,
  setPokemons: PropTypes.func.isRequired,
  pokemonData: PropTypes.object.isRequired,
  setPokemonData: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setAllPokemonData: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
  pokemonType: PropTypes.string.isRequired,
};

export default Pokemons;
