import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 5,
  },
});

const SearchInput = ({ value, handleChange }) => (
  <TextInput
    value={value}
    onChangeText={handleChange}
    style={styles.input}
    placeholder="Search"
  />
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchInput;
