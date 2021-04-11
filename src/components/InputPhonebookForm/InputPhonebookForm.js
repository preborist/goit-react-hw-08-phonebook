import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import './InputPhonebookForm.scss';
// import ContactsList from '../ContactsList';
import * as phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
class InputPhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (name && number) {
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
        ? alert(`${name} is already in contacts`)
        : this.props.addNewContact(name, number);
      this.setState({
        name: '',
        number: '',
      });
    } else {
      alert('Please enter a contact name or phone number!');
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <Card className="InputPhonebookForm__container">
          <form
            className="InputPhonebookForm"
            onSubmit={this.handleSubmit}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              onChange={this.handleInputChange}
              name="name"
              type="text"
              value={name}
              className="InputPhonebookForm__item"
            />
            <TextField
              id="number"
              label="Phone Number"
              onChange={this.handleInputChange}
              name="number"
              type="number"
              value={number}
              className="InputPhonebookForm__item"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="InputPhonebookForm__item"
            >
              Add contact
            </Button>
          </form>
        </Card>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addNewContact: (name, number) =>
    dispatch(phonebookOperations.addNewContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputPhonebookForm);
