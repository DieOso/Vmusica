import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import "./Log.css";
import { signIn } from "../../actions/authActions";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="form-container">
        <form className="reg-form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="email"
          />

          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <div>
            <button>Login</button>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <a>Or Register</a>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
