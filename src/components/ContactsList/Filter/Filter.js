import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as phonebookActions from '../../../redux/phonebook/phonebook-actions';
import * as phonebookSelectors from '../../../redux/phonebook/contacts-selectors';
import './Filter.scss';
import TextField from '@material-ui/core/TextField';

const Filter = ({ inputFilterName, onChangeFilter }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Find contacs by name"
      variant="outlined"
      name="filter"
      type="text"
      value={inputFilterName}
      onChange={onChangeFilter}
      className="Filter"
    />
  );
};

const mapStateToProps = state => ({
  inputFilterName: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

Filter.propTypes = {
  inputFilterName: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
