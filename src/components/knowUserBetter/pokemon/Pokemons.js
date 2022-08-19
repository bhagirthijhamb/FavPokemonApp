import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { getPokemons, getPokemonData } from "./../../../api/api";
import PokemonCard from "./PokemonCard";
import classes from "./Pokemons.module.css";

const Pokemons = ({ setFieldValue }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(16);

  useEffect(() => {
    async function getPokemonList() {
      const pokemonList = await getPokemons(limit, offset);
      setPokemons(pokemonList.results);
    }

    getPokemonList();
  }, [limit, offset]);

  useEffect(() => {
    async function getDetailedPokemonData() {
      const detailedPokemonData = await getPokemonData(pokemons);
      detailedPokemonData.sort((a, b) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      );

      setPokemonData(detailedPokemonData);
    }

    getDetailedPokemonData();
  }, [pokemons]);

  const pokemonCards =
    pokemons.length &&
    pokemonData.map((item) => {
      return (
        <Grid item xs={3} key={item.id}>
          <PokemonCard
            name={item.name}
            setFieldValue={setFieldValue}
            image={
              item.sprites.other.dream_world.front_default
                ? item.sprites.other.dream_world.front_default
                : item.sprites.other["official-artwork"].front_default
            }
          />
        </Grid>
      );
    });

  // return <Card className={classes.pokemonsContainer}>{pokemonCards}</Card>;
  return <>{pokemonCards}</>;
};

export default Pokemons;
