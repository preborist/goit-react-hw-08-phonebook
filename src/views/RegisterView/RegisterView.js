import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './RegisterView.scss';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <Typography variant="h5" gutterBottom className="RegisterView__title">
          Register form
        </Typography>
        <Card className="RegisterView__container">
          <form
            onSubmit={this.handleSubmit}
            autoComplete="off"
            className="RegisterView__form"
          >
            <TextField
              id="name"
              label="Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="RegisterView__item"
            />
            <TextField
              id="email"
              label="E-mail"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="RegisterView__item"
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="RegisterView__item"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="RegisterView__item"
            >
              Register
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
