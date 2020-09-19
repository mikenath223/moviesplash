import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Colors from 'ms/common/constants/colors';
import { posterBaseUrl } from 'ms/common/constants';

const MoreDetails = ({ details: {
  overview, runtime, status, poster_path,
  title, vote_count, production_companies = [], status_message } }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{title || status_message}</Text>
      <ScrollView>
        <Image source={{ uri: posterBaseUrl + poster_path }} style={styles.image}/>
        <View style={styles.overlay}>
          
            <Text style={styles.label}>Production Companies</Text>
          {production_companies.map((item, i) => (
            <Text style={styles.item}>
              {i + 1 + '. ' + item.name}
            </Text>))}
        </View>
        <Text style={styles.label}>Overview</Text>
        <Text style={styles.item}>{overview}</Text>
        <Text style={styles.label}>Runtime</Text>
        <Text style={styles.item}>{runtime}</Text>
        <Text style={styles.label}>Votes</Text>
        <Text style={styles.item}>{vote_count}</Text>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.item}>{status}</Text>
      </ScrollView>
    </View>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 25,
  },
  title: {
    marginVertical: 20,
    padding: 10,
    fontSize: 22,
    backgroundColor: Colors.SunsetOrange,
    color: '#fff'
  },
  item: {
    margin: 4,
    fontSize: 17
  },
  image: {
    width: 370,
    height: 300
  },
  overlay: {
    backgroundColor: 'silver',
  },
  label: {
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: Colors.Grey,
    color: '#fff',
    fontSize: 17
  }
})

export default MoreDetails;