import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ErrorHandler = ({ message, retryRequest }) => (
  <View style={styles.container}>
    <Text>{message}</Text>
    <Button
      color={styles.button}
      onPress={retryRequest}
      title="Retry"
    />
  </View>
);

ErrorHandler.propTypes = {
  message: PropTypes.string.isRequired,
  retryRequest: PropTypes.func.isRequired,
};

export default ErrorHandler;
