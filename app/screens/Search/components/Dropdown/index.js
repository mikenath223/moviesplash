import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropdownItem } from 'react-native-material-dropdown';

const data = [{
  value: 'Movies',
}, {
  value: 'TV Series',
}];

const style = {
  marginBottom: 30,
};

const Dropdown = ({ handleChange }) => (
  <DropdownItem
    label="Media Type"
    data={data}
    containerStyle={style}
    useNativeDriver
    onChangeText={handleChange}
  />
);

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Dropdown;
