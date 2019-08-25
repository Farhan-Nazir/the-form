import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Chip,
  Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { CheckCircleOutline, FaceOutlined } from "@material-ui/icons";
import "./style.css";
import NewButton from "../Button/Button";


const useStyles = makeStyles({
  root: {
   // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    display: "block"
  },
});

class InformationDialog extends React.Component {
  state = {
    open: false,
    data: this.props.data
  };

  //Handle Agree
  handleAgree = () => {
    this.props.dialogResponse(true);
  };

  handleClose = () => {
    this.props.dialogResponse(false);
  };

  render() {
   
    const { data } = this.state;
    return (
      
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
          onExit={this.props.onExit}
          
        >
          <DialogTitle id="responsive-dialog-title">
            <h2>Submission Successful</h2>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <h4>Following Information Submitted Successfully</h4>
              </DialogContentText>
              
              <Chip
                icon={<CheckCircleOutline />}
                label={data.firstName}
                color="primary"
                size="medium"
                variant="outlined"
              />
              
              <Chip
                icon={<CheckCircleOutline />}
                label={data.lastName}
                color="primary"
                size="medium"
                variant="outlined"
              />
              <Chip
                icon={<CheckCircleOutline />}
                label={data.email}
                color="primary"
                size="medium"
                variant="outlined"
              />
              <Chip
                icon={<CheckCircleOutline />}
                label={data.address}
                color="primary"
                size="medium"
                variant="outlined"
              />
            <Typography>You may close this window, Thank you</Typography>
          </DialogContent>
        </Dialog>
      
    );
  }
}

export default InformationDialog;
