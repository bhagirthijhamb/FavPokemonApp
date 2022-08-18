import React from "react";
import { useFormikContext } from "formik";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SubmitConfirmation = () => {
  const { values: formValues } = useFormikContext();
  const { firstName, lastName, phoneNumber, address, pokemon } = formValues;
  return (
    <Container component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone Number" secondary={phoneNumber} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary={address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Pokemon" secondary={pokemon} />
          </ListItem>
        </List>
      </div>
    </Container>
  );
};

export default SubmitConfirmation;
