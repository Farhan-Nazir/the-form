import React from "react";
import Snackbar from "@material-ui/core/Snackbar";



class ErrorMessage extends React.Component {
  state = {
    vertical: "top",
    horizontal: "center",
    exit: 10
  };

  render() {
    const { vertical, horizontal } = this.state;
  
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.props.openErrorMessage}
          message={<span>{this.props.errorMessage}</span>}
          style={{marginTop: "6%", marginLeft: "2%"}}
          autoHideDuration={this.props.duration}
          variant={this.props.variant}
          transitionDuration={100}
          
          
        />
      </div>
    );
  }
}

export default ErrorMessage;
