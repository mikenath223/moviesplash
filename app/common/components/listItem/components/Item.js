import React from 'react';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import {
  TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';
import { posterBaseUrl } from 'ms/common/constants/';
import noimage from 'moviesplash/assets/noimage.png';
import Colors from 'ms/common/constants/colors';
import textSizes from 'ms/common/constants/textSizes';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.AmberRed,
    borderRadius: 15,
    margin: 30,
    height: 349,
  },
  splashImage: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    height: '72%',
    resizeMode: 'cover',
  },
  text: {
    padding: 4,
    textAlign: 'center',
  },
  title: {
    fontSize: textSizes.Medium,
    backgroundColor: Colors.AmberRed,
    color: Colors.Cream,
  },
  date: {
    fontSize: textSizes.Medium,
    backgroundColor: Colors.Grey,
  },
  votes: {
    backgroundColor: Colors.Silver,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

/* eslint-disable camelcase */
const Item = ({ item, handleGetDetails, altMediaType = '' }) => {
  const {
    id, backdrop_path, poster_path, name, title,
    release_date, popularity, media_type,
  } = item;
  const reversedDate = date => (date
    ? date.split('-').reverse().join('-') : '');

  let imageLoc = {
    uri: posterBaseUrl + (backdrop_path || poster_path),
    priority: FastImage.priority.high,
  };
  if (!backdrop_path || !poster_path) {
    imageLoc = noimage;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        handleGetDetails(id, media_type || altMediaType);
      }}
    >
      <View style={styles.container}>
        <FastImage
          source={imageLoc}
          style={styles.splashImage}
        />
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[styles.text, styles.title]}
        >
          {(name || title)}
        </Text>
        <Text style={[styles.text, styles.date]}>{reversedDate(release_date)}</Text>
        <Text style={[styles.text, styles.votes]}>{popularity}</Text>
      </View>
    </TouchableOpacity>
  );
};

Item.defaultProps = {
  altMediaType: '',
};

Item.propTypes = {
  item: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleGetDetails: PropTypes.func.isRequired,
  altMediaType: PropTypes.string,
};

export default Item;
