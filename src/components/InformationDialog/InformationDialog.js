import React from "react";
import store from "../../store";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Chip,
  Typography
} from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";

class InformationDialog extends React.Component {
  state = {
    open: false
  };

  //Handle Agree
  handleAgree = () => {
    this.props.dialogResponse(true);
  };

  handleClose = () => {
    this.props.dialogResponse(false);
  };

  showFieldsAfterSubmit = () => {
    const data = store.getState().formReducer.data;
    const res = [];
    for (let [key, value] of Object.entries(data)) {
      res.push(value);
    }
    return res.map((i, index) => {
      if (i.length > 0)
        return (
          <Chip
            icon={<CheckCircleOutline />}
            label={i}
            color="primary"
            size="medium"
            variant="outlined"
            key={index}
          />
        );
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
        onExit={this.props.onExit}
        maxWidth={"lg"}
      >
        <DialogTitle id="responsive-dialog-title">
          Thank you for getting in touch!
        </DialogTitle>
        <DialogContent>
          <Typography variant={"subtitle1"}>
            Following information has been submitted
          </Typography>

          {this.showFieldsAfterSubmit()}

          <Typography variant={"subtitle2"}>
            You may close this window.
          </Typography>
        </DialogContent>
      </Dialog>
    );
  }
}

export default InformationDialog;
