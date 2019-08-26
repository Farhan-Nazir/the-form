import React from "react";
import { connect } from "react-redux";
import NewTextField from "../components/TextField/TextField";
import NewButton from "../components/Button/Button";
import { addForm } from "../actions/form-actions";
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
      isDialogOpen: false,
      isDisabled: false
    };
  }

  onChangeHandle = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandle = event => {
    event.preventDefault();
    let { data, firstName, lastName, email, address } = this.state;
    if (this.onValidationHandle(email)) {
      this.setState({
        data:  Object.assign(data, { firstName, lastName, email, address }),
        isDialogOpen: true,
        isError: false
      });
      this.props.addForm(data);
    } else {
      this.setState({ isError: true });
    }
  };

  onValidationHandle = input => {
    const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailRegex = new RegExp(emailValidation);
    return input.match(emailRegex) ? true : false;
  };

  onDialogResponse = res => this.setState({ isDialogOpen: res });

  render() {
    const {
      data,
      firstName,
      lastName,
      email,
      address,
      isError,
      isDisabled
    } = this.state;
    return (
      <div className="main">
        <div className="the-form">
          <h2 className="title">Submit Your Information</h2>
          <div>
            <NewTextField
              value={firstName}
              name={"firstName"}
              label={"First Name"}
              variant={"outlined"}
              onChange={this.onChangeHandle}
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <NewTextField
              value={lastName}
              name={"lastName"}
              variant={"outlined"}
              label={"Last Name"}
              onChange={this.onChangeHandle}
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
              onChange={this.onChangeHandle}
              isDisabled={isDisabled}
            />
          </div>
          <div>
            <NewTextField
              value={address}
              name={"address"}
              label={"Address"}
              onChange={this.onChangeHandle}
              isMultiline
              variant={"outlined"}
              rows={4}
              isDisabled={isDisabled}
            />
          </div>
          <div className="btn-submit">
            <NewButton
              tag={"Submit"}
              variant={"outlined"}
              color={"primary"}
              isDisabled={isDisabled}
              onClick={this.onSubmitHandle}
            />
          </div>
        </div>

        <InformationDialog
          open={this.state.isDialogOpen}
          dialogResponse={this.onDialogResponse}
          data={data}
          onExit={() => this.setState({ isDialogOpen: true })}
        />
        <ErrorMessage
          openErrorMessage={isError}
          errorMessage={"Please enter the valid email!!!!"}
          variant={"warning"}
        />
      </div>
    );
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addForm: data => dispatch(addForm(data))
  };
};

let mapStateToProps = state => {
  const { formReducer } = state;
  return formReducer;
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TheForm);
