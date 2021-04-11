import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import './AppBar.scss';

const MyAppBar = ({ isAuthentificated }) => {
  return (
    <AppBar position="static">
      <Container>
        <header className="header__container">
          <Navigation />
          {isAuthentificated ? <UserMenu /> : <AuthNav />}
        </header>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  isAuthentificated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(MyAppBar);
