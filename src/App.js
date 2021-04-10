import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchContacts } from './redux/phonebook/phonebook-operations';

// import InputPhonebookForm from './components/InputPhonebookForm';
// import ContactsList from './components/ContactsList';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';
import { authOperations } from './redux/auth';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';
// import * as phonebookSelectors from './redux/phonebook/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/contacts"
          />
          <PrivatRoute
            path="/contacts"
            component={PhonebookView}
            redirectTo="/login"
          />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
