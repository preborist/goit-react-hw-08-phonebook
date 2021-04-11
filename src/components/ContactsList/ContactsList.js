import React, { Component } from 'react';
import Contact from './Contact';
import Filter from './Filter';
import './ContactList.scss';
import { connect } from 'react-redux';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import * as phonebookSelectors from '../../redux/phonebook/contacts-selectors';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <>
        <Filter />
        <Typography variant="h5" gutterBottom className="ContactsList__title">
          Filtered list of your contacts
        </Typography>
        {this.props.isLoadingContacts && <h2>Загружаем...</h2>}
        {this.props.filteredContacts.length > 0 ? (
          <List component="nav" aria-label="secondary mailbox folders">
            <ul className="ContactList">
              {this.props.filteredContacts.map(({ id, name, number }) => (
                <ListItem button className="ContactList__item" key={id}>
                  <Contact
                    id={id}
                    name={name}
                    number={number}
                    onHandleDelete={this.props.onHandleDelete}
                  ></Contact>
                </ListItem>
              ))}
            </ul>
          </List>
        ) : (
          <Alert severity="warning" className="ContactsList_alert">
            no results or your contact list is empty!
          </Alert>
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
