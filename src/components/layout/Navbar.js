import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Navbar.css";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper">
      <div className="menu">
        <svg viewBox="0 0 20 20">
          <path
            className="menuImage"
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
          />
        </svg>
      </div>
      <Link to="/" className="logo">
        <h1>
          V<span>M</span>
        </h1>
      </Link>
      {links}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);

// export default Navbar;
