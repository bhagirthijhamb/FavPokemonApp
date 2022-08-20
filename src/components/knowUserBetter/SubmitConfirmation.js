import React from "react";
import { useFormikContext } from "formik";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import classes from "./SubmitConfirmation.module.css";

const SubmitConfirmation = () => {
  const { values: formValues } = useFormikContext();
  const { firstName, lastName, phoneNumber, zipCode, address, pokemon } =
    formValues;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailTitle}`}
        >
          First Name
        </Typography>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailValue}`}
        >
          {firstName}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailTitle}`}
        >
          Last Name
        </Typography>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailValue}`}
        >
          {lastName}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailTitle}`}
        >
          Phone Number
        </Typography>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailValue}`}
        >
          {phoneNumber}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailTitle}`}
        >
          Zipcode
        </Typography>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailValue}`}
        >
          {zipCode}
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailTitle}`}
        >
          Address
        </Typography>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailValue}`}
        >
          {address}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailTitle}`}
        >
          Favourite Pokemon
        </Typography>
        <Typography
          className={`${classes.userDetail} ${classes.userDetailValue}`}
        >
          {pokemon}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubmitConfirmation;
