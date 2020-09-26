import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from 'ms/common/constants/colors';

const TvInfo = ({ episode_run_time, first_air_date,
  last_air_date, seasons = []
}) => {
  const reversedAirDate = (date) => date ?
  date.split('-').reverse().join('-') : '';

  return (
    <View>
      <Text style={styles.label}>Episode Runtime</Text>
      <Text style={styles.item}>{episode_run_time || '?'} mins</Text>
      <Text style={styles.label}>First Air Date</Text>
      <Text style={styles.item}>{reversedAirDate(first_air_date)}</Text>
      <Text style={styles.label}>Last Air Date</Text>
      <Text style={styles.item}>{reversedAirDate(last_air_date)}</Text>
      <Text style={styles.label}>Seasons</Text>
      {seasons.map(item => (
        <View style={styles.seasonCont} key={item.id}>
          <Text style={[styles.item, styles.seasonsLabel]}>{item.name}</Text>
          <Text style={styles.item}>Air Date: {reversedAirDate(item.air_date)}</Text>
          <Text style={styles.item}>Overview: {item.overview}</Text>
          <Text style={styles.item}>Episodes: {item.episode_count}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    textAlign: 'center',
    margin: 4,
    fontSize: 17
  },
  label: {
    padding: 10,
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: Colors.AmberRed,
    color: '#fff',
    fontSize: 17
  },
  seasonsLabel: {
    backgroundColor: Colors.Grey,
    padding: 6,
    marginTop: 6,
    fontSize: 15,
    color: '#fff',
    fontStyle: 'italic'
  },
  seasonCon: {
    borderWidth: 2,
    borderColor: Colors.TangOrange
  }
})

export default TvInfo;