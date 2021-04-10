import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';

const AppBar = ({ isAuthentificated }) => {
  return (
    <header className="AppBar">
      <Navigation />
      {isAuthentificated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
