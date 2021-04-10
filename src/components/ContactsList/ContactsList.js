import React, { Component } from 'react';
import Contact from './Contact';
import Filter from './Filter';
import './ContactList.scss';
import { connect } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import * as phonebookSelectors from '../../redux/phonebook/contacts-selectors';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <Filter />
        <h2>Contacts</h2>
        {this.props.isLoadingContacts && <h2>Загружаем...</h2>}
        {this.props.filteredContacts.length > 0 && (
          <ul className="ContactList">
            {this.props.filteredContacts.map(({ id, name, number }) => (
              <li className="ContactList__item" key={id}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                  onHandleDelete={this.props.onHandleDelete}
                ></Contact>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  filteredContacts: phonebookSelectors.getFilteredContacts(state),
  isLoadingContacts: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onHandleDelete: id => dispatch(phonebookOperations.deleteContact(id)),
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
