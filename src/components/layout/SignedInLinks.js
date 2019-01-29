import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../actions/authActions";

const SignedInLinks = props => {
  const { initials } = props.profile;
  return (
    <ul className="right">
      <li>
        <a className="sign-out" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/">{initials}</NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedInLinks);
