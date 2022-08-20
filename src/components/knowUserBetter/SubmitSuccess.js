import React from "react";
import Typography from "@mui/material/Typography";
import classes from "./SubmitSuccess.module.css";

const SubmitSuccess = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Information submitted 🎉
      </Typography>
      <img
        alt="pokemon"
        src={require("./../../images/pokemon-2.webp")}
        className={classes.pokemonImageSuccesPage}
      />
      <Typography variant="h5" gutterBottom>
        Thanks for being awesome!
      </Typography>
    </>
  );
};

export default SubmitSuccess;
