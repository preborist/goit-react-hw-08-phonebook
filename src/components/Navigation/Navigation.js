import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = ({ isAuthentificated }) => {
  return (
    <nav>
      <NavLink
        exact
        to="/"
        className="NavLink"
        activeClassName="NavLink--active"
      >
        Home
      </NavLink>
      {isAuthentificated && (
        <NavLink
          exact
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
