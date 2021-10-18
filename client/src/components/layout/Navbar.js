import React, { Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { logout } from "../../actions/auth";
import { Link } from "react-router-dom";

function Navbar({ logout, auth: { isAuthenticated, loading } }) {
  const auhLinks = (
    <ul>
      <li>
        <a href="#!" onClick={logout}>
          <i className="fas fa-sign-out-alt">
            {" "}
            <span className="hide-sm"> Logout</span>{" "}
          </i>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="#!">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? auhLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
