import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth/';
import Button from '@material-ui/core/Button';
import './UserMenu.scss';

const UserMenu = ({ email, onLogout }) => (
  <div className="UserMenu">
    <p className="UserMenu__title">
      Welcome, <span className="UserMenu__email">{email}</span>
    </p>
    <Button
      variant="contained"
      color="secondary"
      type="button"
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
