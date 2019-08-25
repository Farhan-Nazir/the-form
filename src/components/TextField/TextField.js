import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";

const NewTextField = ({
  value,
  name,
  onChange,
  error,
  label,
  margin,
  variant,
  style,
  isMultiline,
  rows,
  isAutoFocus,
  isRequired,
  type,
  isError,
  isDisabled
}) => {
  return (
    
      <TextField
        value={value}
        name={name}
        onChange={onChange}
        error={error}
        label={label}
        margin={margin}
        variant={variant}
        style={style}
        multiline={isMultiline}
        required={isRequired}
        rows={rows}
        type={type}
        margin="normal"
        autoFocus={isAutoFocus}
        style={{ width: "70%" }}
        error={isError}
        disabled={isDisabled}
      />
  
  );
};

NewTextField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  type: PropTypes.any
};

export default NewTextField;
