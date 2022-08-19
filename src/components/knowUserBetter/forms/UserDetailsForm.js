import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "./InputField";

const UserDetailsForm = (props) => {
  const {
    formField: { firstName, lastName, phoneNumber, address },
  } = props;

  return (
    <>
      {/* <Typography variant="h6" gutterBottom> */}
      <Typography component="h2" variant="h5" align="left" marginBottom={3}>
        User Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={phoneNumber.name}
            label={phoneNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address.name} label={address.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};

export default UserDetailsForm;
