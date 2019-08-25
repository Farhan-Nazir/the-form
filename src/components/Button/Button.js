import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
const NewButton = ({ variant, tag, color, onClick, isDisabled }) => {
  const classes = useStyles();
  return (
    <Button variant={variant} color={color} className={classes.root} onClick={onClick} disabled={isDisabled}>
      {tag}
    </Button>
  );
};

NewButton.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.string.isRequired
};

export default NewButton;
