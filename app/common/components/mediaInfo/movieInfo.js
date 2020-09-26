import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from 'ms/common/constants/colors';

const MovieInfo = ({ runtime }) => (
  <View>
    <Text style={styles.label}>Runtime</Text>
    <Text style={styles.item}>{runtime} mins</Text>
  </View>
)

const styles = StyleSheet.create({
  item: {
    margin: 4,
    fontSize: 17,
    textAlign: 'center',
  },
  label: {
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: Colors.AmberRed,
    color: '#fff',
    fontSize: 17
  }
})

export default MovieInfo;