import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <>
    <NavLink to="/register" exact>
      Register
    </NavLink>
    <NavLink to="/login" exact>
      Login
    </NavLink>
  </>
);

export default AuthNav;
