import React, { useState } from 'react';
import {
  Text, KeyboardAvoidingView, Keyboard, View,
  TouchableWithoutFeedback, Button, StyleSheet, Platform,
} from 'react-native';
import DropDown from 'ms/screens/Search/components/Dropdown';
import SearchInput from 'ms/screens/Search/components/SearchInput';
import withResultRenderer from 'ms/common/components/withResultRenderer';
import ListItem from 'ms/common/components/ListItem';
import { searchUrl } from 'ms/common/constants';
import textSizes from 'ms/common/constants/textSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCont: {
    flex: 1,
    marginHorizontal: 30,
  },
  submitBtn: {
    fontSize: textSizes.Medium,
  },
  headText: {
    fontSize: textSizes.Medium,
    marginVertical: 35,
    marginHorizontal: 20,
  },
});

const Search = () => {
  const [inputText, setInputText] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (!inputText || !selectedValue) {
      return;
    }
    setShowResults(true);
  };

  const handleInputChange = text => setInputText(text);

  const handleDropDownChange = value => setSelectedValue(value);

  if (showResults) {
    const url = searchUrl(inputText, selectedValue);
    const title = selectedValue === 'Movies' ? 'movie' : 'tv';
    const SearchResult = withResultRenderer(ListItem, url);
    return <SearchResult altMediaType={title} />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.flexCont}>
          <Text style={styles.headText}>
            Search your favorite Movies and TV Series
          </Text>
          <SearchInput
            value={inputText}
            handleChange={handleInputChange}
          />
          <DropDown
            value={selectedValue}
            handleChange={handleDropDownChange}
          />
          <Button
            style={styles.submitBtn}
            onPress={handleSearch}
            title="Search"
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Search;
