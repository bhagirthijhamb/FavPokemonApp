import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PokemonDetailModal from "./PokemonDetailModal";
import { getPokemonSpeciesData } from "./../../../api/api";

import classes from "./PokemonCard.module.css";

const PokemonCard = ({
  pokemonData,
  setFieldValue,
  favPokemon,
  setFavPokemon,
}) => {
  const [open, setOpen] = useState(false);
  const [pokemonSpecieInfo, setPokemonSpecieInfo] = useState("");

  const { name } = pokemonData;
  const image = pokemonData.sprites.other.dream_world.front_default
    ? pokemonData.sprites.other.dream_world.front_default
    : pokemonData.sprites.other["official-artwork"].front_default;

  async function infoClickHandler() {
    setOpen(true);
    const pokemonSpeciesData = await getPokemonSpeciesData(name);
    setPokemonSpecieInfo(pokemonSpeciesData);
  }

  function handleClose(value) {
    setOpen(false);
  }

  function selectClickHandler(e) {
    // setFavPokemon("");
    setFieldValue("pokemon", e.target.value);
    setFavPokemon(e.target.value);
  }
  return (
    <div className={classes.card}>
      <img padding={2} src={image} alt="pokemon" />
      <div className={classes.cardContent}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={classes.pokemonName}
        >
          {name}
        </Typography>
      </div>
      <PokemonDetailModal
        open={open}
        onClose={handleClose}
        pokemonData={pokemonData}
        image={image}
        pokemonSpecieInfo={pokemonSpecieInfo}
      />
      <div className={classes.cardActions}>
        <Button
          variant="outlined"
          size="small"
          onClick={infoClickHandler}
          className={classes.cardButton}
        >
          Info
        </Button>
        <Button
          variant="contained"
          size="small"
          value={name}
          onClick={selectClickHandler}
          className={classes.cardButton}
          disabled={favPokemon === name}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemonData: PropTypes.object,
  setFieldValue: PropTypes.func,
  favPokemon: PropTypes.string,
  setFavPokemon: PropTypes.func,
};

export default PokemonCard;
