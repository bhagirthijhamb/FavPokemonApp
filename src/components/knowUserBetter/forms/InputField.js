import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import TextField from "@mui/material/TextField";
import { at } from "lodash";

const InputField = (props) => {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      type="text"
      size="small"
      error={meta.touched && meta.error && true}
      helperText={renderHelperText()}
      {...field}
      {...rest}
    />
  );
};

InputField.propTypes = {
  errorText: PropTypes.string,
};

export default InputField;
