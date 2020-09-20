import React from 'react';
import { View, Image, Text, TouchableHighlight, StyleSheet } from 'react-native'

const Item = ({ item, handleGetMovieDetails }) => {
  const { id, backdrop_path, name, title,
    release_date, popularity } = item;

  return (
    <>
      <TouchableHighlight
        onPress={() => handleGetMovieDetails(id)}>
        <View
          style={styles.flexCol}>
          <Image source={{ uri: 'https://image.tmdb.org/t/p/original/' + backdrop_path }} style={styles.splashImage} />
          <View>
            <Text>{name}</Text>
            <Text>{title}</Text>
            <Text>{release_date}</Text>
            <Text>{popularity}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </>
  )
}
// https://api.themoviedb.org/3/search/movie?query=tenet&api_key=159a4b02e517671b904d19f2ae59a663
// https://api.themoviedb.org/3/movie/popular?api_key=###&page=2

const styles = StyleSheet.create({
  flexCol: {
    borderWidth: 1,
    borderColor: 'grey'
  },
  splashImage: {
    width: 200,
    height: 150,
  }
})

export default Item;