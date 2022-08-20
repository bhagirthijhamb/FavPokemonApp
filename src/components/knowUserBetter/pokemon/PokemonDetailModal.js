import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./PokemonDetailModal.module.css";

const PokemonDetailModalTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

PokemonDetailModalTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const PokemonDetailModal = (props) => {
  const {
    onClose,
    selectedValue,
    open,
    image,
    pokemonData: { name, id, abilities, height, weight },
    pokemonSpecieInfo,
  } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  // function handleListItemClick(value) {
  //   onClose(value);
  // }

  function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.substring(1);
  }

  const abilitiesContent =
    abilities.length &&
    abilities.map((item) => (
      <li key={get(item, "ability.name")}>{get(item, "ability.name")}</li>
    ));
  return (
    <Dialog onClose={handleClose} open={open}>
      <PokemonDetailModalTitle
        id="customized-dialog-title"
        onClose={handleClose}
      >
        #{String(id).padStart(3, "0")}{" "}
        <span className={classes.name}>{capitalizeName(name)}</span>
      </PokemonDetailModalTitle>
      <Box sx={{ pt: 0 }} className={classes.modalContent}>
        <Box className={classes.modalImageContainer}>
          <img
            padding={2}
            src={image}
            alt="pokemon"
            className={classes.modalImage}
          />
        </Box>
        <Box>
          <Typography variant="subtitle1" className={classes.modalSubtitle}>
            About
          </Typography>
          <Box className={classes.modalDetails}>
            <Typography variant="body2">
              {get(pokemonSpecieInfo, "flavor_text_entries") &&
                get(pokemonSpecieInfo, "flavor_text_entries[0].flavor_text")}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1" className={classes.modalSubtitle}>
            Abilities
          </Typography>
          <Box className={classes.modalDetails}>
            <ul variant="body2" className={classes.modalDetails}>
              {abilitiesContent}
            </ul>
          </Box>
        </Box>
        <Box>
          <Typography variant="subtitle1" className={classes.modalSubtitle}>
            Stats
          </Typography>
          <Box className={classes.modalDetails}>
            <Typography variant="body2" className={classes.statsCategory}>
              <span className={classes.statsName}>Height</span>
              <span>{`${height / 10} m/${`${Math.floor(
                (height / 10) * 3.28
              )}'${Math.round((((height / 10) * 3.28) % 1) * 12)}"`} `}</span>
            </Typography>
            <Typography variant="body2" className={classes.statsCategory}>
              <span className={classes.statsName}>Weight</span>
              <span>{`${(weight / 10).toFixed(1)} kg/${(
                weight * 0.2205
              ).toFixed(1)} lbs`}</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

PokemonDetailModal.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

export default PokemonDetailModal;
