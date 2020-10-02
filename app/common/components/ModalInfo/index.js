import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView, View, Text, Image, StyleSheet,
} from 'react-native';
import Colors from 'ms/common/constants/colors';
import { posterBaseUrl } from 'ms/common/constants';
import noimage from 'moviesplash/assets/noimage.png';
import MovieInfo from './movieInfo';
import TvInfo from './tvSeriesInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    padding: 10,
  },
  title: {
    marginVertical: 20,
    padding: 10,
    fontSize: 22,
    backgroundColor: Colors.SunsetOrange,
    color: '#fff',
  },
  error: {
    color: 'red',
  },
  item: {
    margin: 4,
    fontSize: 17,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
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
    fontSize: 17,
  },
});

/* eslint-disable camelcase */

const ModalInfo = ({ details }) => {
  const {
    overview, runtime, status, poster_path,
    title, name, vote_count, production_companies = [],
    seasons, episode_run_time, first_air_date,
    last_air_date, status_message, mediaType,
  } = details;

  if (status_message) {
    return (
      <View style={styles.container}>
        <Text style={[styles.error, styles.title]}>{status_message}</Text>
      </View>
    );
  }

  const imageLoc = poster_path ? {
    uri: posterBaseUrl + poster_path,
  } : noimage;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title || name}</Text>
      <ScrollView style={styles.scroll}>
        <Image source={imageLoc} style={styles.image} />
        <Text style={styles.label}>Overview</Text>
        <Text style={styles.item}>{overview}</Text>
        <View style={styles.overlay}>
          <Text style={styles.label}>Production Companies</Text>
          {production_companies.map((item, i) => (
            <Text style={styles.item} key={item.id}>
              {`${i + 1}. ${item.name}`}
            </Text>
          ))}
        </View>
        {mediaType === 'movie' ? <MovieInfo runtime={runtime} />
          : (
            <TvInfo
              seasons={seasons}
              episode_run_time={episode_run_time}
              first_air_date={first_air_date}
              last_air_date={last_air_date}
            />
          )}
        <Text style={styles.label}>Votes</Text>
        <Text style={styles.item}>{vote_count}</Text>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.item}>{status}</Text>
      </ScrollView>
    </View>
  );
};

ModalInfo.propTypes = {
  details: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export default ModalInfo;
