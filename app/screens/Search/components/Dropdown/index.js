import React from 'react';
import { Dropdown as DropdownItem } from 'react-native-material-dropdown';

const data = [{
  value: "Movies",
}, {
  value: "TV Series"
}]

const Dropdown = ({ handleChange }) => <DropdownItem
  label="Media Type"
  data={data}
  containerStyle={style}
  useNativeDriver={true}
  onChangeText={handleChange}
/>

const style = {
  marginBottom: 30
}

export default Dropdown;