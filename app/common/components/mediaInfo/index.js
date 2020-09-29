import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Colors from 'ms/common/constants/colors';
import { posterBaseUrl } from 'ms/common/constants';
import MovieInfo from './movieInfo';
import TvInfo from './tvSeriesInfo';

const MediaInfo = ({ details }) => {
  const { overview, runtime, status, poster_path,
    title, name, vote_count, production_companies = [],
    seasons, episode_run_time, first_air_date,
    last_air_date, status_message, mediaType } = details;

  if (status_message) {
    return <Text style={[styles.error, styles.title]}>{status_message}</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || name}</Text>
      <ScrollView>
        <Image source={{ uri: posterBaseUrl + poster_path }} style={styles.image} />
        <Text style={styles.label}>Overview</Text>
        <Text style={styles.item}>{overview}</Text>
        <View style={styles.overlay}>
          <Text style={styles.label}>Production Companies</Text>
          {production_companies.map((item, i) => (
            <Text style={styles.item} key={item.id}>
              {i + 1 + '. ' + item.name}
            </Text>
          ))}
        </View>
        {mediaType === "movie" ? <MovieInfo runtime={runtime} /> :
          <TvInfo seasons={seasons} episode_run_time={episode_run_time}
            first_air_date={first_air_date} last_air_date={last_air_date} />}
        <Text style={styles.label}>Votes</Text>
        <Text style={styles.item}>{vote_count}</Text>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.item}>{status}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20
  },
  title: {
    marginVertical: 20,
    padding: 10,
    fontSize: 22,
    backgroundColor: Colors.SunsetOrange,
    color: '#fff'
  },
  error: {
    color: 'red'
  },
  item: {
    margin: 4,
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover'
  },
  overlay: {
    backgroundColor: 'silver',
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

export default MediaInfo;