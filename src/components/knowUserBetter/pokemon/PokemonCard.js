import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import classes from "./PokemonCard.module.css";

const PokemonCard = ({ id, name, setFieldValue, image }) => {
  function buttonClickHandler(e) {
    setFieldValue("pokemon", e.target.value);
  }
  return (
    <div
      className={classes.card}
      // sx={{ maxWidth: 345 }}
      // style={{
      //   backgroundColor: "rgb(219, 241, 249)",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <img padding={2} src={image} alt="image-pokemon" />
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
      <div className={classes.cardActions}>
        <Button size="small">Details</Button>
        <Button size="small" value={name} onClick={buttonClickHandler}>
          Select
        </Button>
      </div>
    </div>
  );
};

export default PokemonCard;
