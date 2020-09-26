import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { posterBaseUrl } from 'ms/common/constants/';
import Colors from 'ms/common/constants/colors';
import textSizes from 'ms/common/constants/textSizes';

const Item = ({ item, handleGetDetails, altMediaType }) => {
  const { id, backdrop_path, poster_path, name, title,
    release_date, popularity, media_type } = item;
  const reversedDate = (date) => date ?
    date.split('-').reverse().join('-') : '';

  return (
    <TouchableOpacity
      onPress={() => {
        handleGetDetails(id, media_type || altMediaType)
      }}>
      <View style={styles.container}>
        <Image
          source={{ uri: posterBaseUrl + (backdrop_path || poster_path) }}
          style={styles.splashImage} />
        <Text style={[styles.text, styles.title]}>{name || title}</Text>
        <Text style={[styles.text, styles.date]}>{reversedDate(release_date)}</Text>
        <Text style={[styles.text, styles.votes]}>{popularity}</Text>
      </View>
    </TouchableOpacity>)
}
// https://api.themoviedb.org/3/search/movie?query=tenet&api_key=159a4b02e517671b904d19f2ae59a663
// https://api.themoviedb.org/3/movie/popular?api_key=###&page=2

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.AmberRed,
    borderRadius: 15,
    margin: 30,
    height: 398
  },
  splashImage: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
    height: '100%',
    resizeMode: cover
  },
  text: {
    padding: 4,
    textAlign: 'center',
  },
  title: {
    fontSize: textSizes.Large,
    backgroundColor: Colors.AmberRed,
    color: Colors.Cream
  },
  date: {
    fontSize: textSizes.Medium,
    backgroundColor: Colors.Grey,
  },
  votes: {
    backgroundColor: Colors.Silver,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
})

export default Item;