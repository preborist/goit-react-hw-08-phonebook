import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './LoginView.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Typography variant="h5" gutterBottom className="LoginView__title">
          Login form
        </Typography>
        <Card className="LoginView__container">
          <form
            onSubmit={this.handleSubmit}
            autoComplete="off"
            className="LoginView__form"
          >
            <TextField
              id="email"
              label="E-mail"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="LoginView__item"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="LoginView__item"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="InputPhonebookForm__item"
            >
              Войти
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
