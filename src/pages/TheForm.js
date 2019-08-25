import React from "react";
import { connect } from "react-redux";
import NewTextField from "../components/TextField/TextField";
import NewButton from "../components/Button/Button";
import { addForm } from "../actions/form-actions";
import { Paper } from "@material-ui/core";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import "./style.css";
import InformationDialog from "../components/InformationDialog/InformationDialog";

class TheForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      isError: false,
      isSubmitted: false,
      isDialogOpen: false,
      isDisabled: false
    };
  }

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    let { data, firstName, lastName, email, address } = this.state;
    if (this.handleValidation(email)) {
      this.setState({
        data: Object.assign(data, { firstName, lastName, email, address }),
        isDialogOpen: true
      });
      this.props.addForm(data);
    } else {
      this.setState({ isError: true });
    }
  };

  handleValidation = input => {
    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRegex = new RegExp(emailValidation);
    return input.match(emailRegex) ? true : false;
  };
  handleDialogResponse = res => this.setState({ isDialogOpen: res });

  render() {
    const { data, firstName, lastName, email, address, isError, isDisabled } = this.state;
    return (
      <div className="main">
        <Paper>
          <h2>Submit Your Information</h2>

          <form>
            <div className="the-form">
              <div>
                <NewTextField
                  value={firstName}
                  name={"firstName"}
                  label={"First Name"}
                  variant={"outlined"}
                  onChange={this.onHandleChange}
                  isDisabled={isDisabled}
                />
              </div>
              <div>
                <NewTextField
                  value={lastName}
                  name={"lastName"}
                  variant={"outlined"}
                  label={"Last Name"}
                  onChange={this.onHandleChange}
                  isDisabled={isDisabled}
                />
              </div>
              <div>
                <NewTextField
                  value={email}
                  name={"email"}
                  label={"Email"}
                  type={"email"}
                  variant={"outlined"}
                  isRequired
                  isError={isError}
                  onChange={this.onHandleChange}
                  isDisabled={isDisabled}
                />
              </div>
              <div>
                <NewTextField
                  value={address}
                  name={"address"}
                  label={"Address"}
                  onChange={this.onHandleChange}
                  isMultiline
                  variant={"outlined"}
                  rows={4}
                  isDisabled={isDisabled}
                />
              </div>
              <div className="btn-submit">
                <NewButton
                  tag={"Submit"}
                  onClick={this.onHandleSubmit}
                  variant={"outlined"}
                  color={"primary"}
                  isDisabled={isDisabled}
                />
              </div>
              
            </div>
          </form>
         
       <InformationDialog
          open={this.state.isDialogOpen}
          dialogResponse={this.handleDialogResponse}
          data={data}
          onExit={() => this.setState({isDialogOpen: true})}
         
        />
          <ErrorMessage
            openErrorMessage={isError}
            errorMessage={"Please enter the valid email!!!!"}
            variant={"warning"}
          />
        </Paper>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addForm: data => dispatch(addForm(data))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(TheForm);
