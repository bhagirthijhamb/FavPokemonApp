import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "./InputField";

const UserDetailsForm = (props) => {
  const {
    formField: { firstName, lastName, phoneNumber, zipCode, address },
  } = props;

  return (
    <>
      <Typography component="h2" variant="h5" align="left" gutterBottom>
        User Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={phoneNumber.name}
            label={phoneNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipCode.name} label={zipCode.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address.name} label={address.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};

UserDetailsForm.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  zipCode: PropTypes.string,
  address: PropTypes.string,
};

export default UserDetailsForm;
