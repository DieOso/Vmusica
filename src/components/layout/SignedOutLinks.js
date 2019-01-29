import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = props => (
  <NavLink to="/signin">
    <button className="btn" onClick="">
      LogIn
    </button>
  </NavLink>
);

export default SignedOutLinks;
