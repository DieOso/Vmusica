import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Log.css";
import { signUp } from "../../actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="form-container">
        <form className="reg-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={this.handleChange}
          />

          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />

          <input
            placeholder="name"
            type="text"
            name="firstName"
            onChange={this.handleChange}
          />

          <input
            placeholder="last name"
            type="text"
            name="lastName"
            onChange={this.handleChange}
          />

          <div>
            <button>Sign up</button>
            <Link style={{ textDecoration: "none" }} to="/signin">
              <a>Or Login</a>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
