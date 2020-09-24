import React, { useState, useEffect } from 'react';
import { SectionList, SafeAreaView, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import MediaList from 'ms/common/components/listItem';
import LoadingAnimation from 'ms/common/components/LoadingAnimation';
import Colors from 'ms/common/constants/colors';
import TextSizes from 'ms/common/constants/textSizes';
import { getDatasets } from 'ms/common/utils/request';
import { movieGenreUrl, tvGenreUrl, moreDetailsUrl } from 'ms/common/constants';
import withResultRenderer from '../../common/components/withResultRenderer';

const Genres = () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loadMedia, setLoadMedia] = useState([false]);

  useEffect(() => {
    fetchResult();
  }, [])

  const setLoadingState = isComponentLoading =>
    setIsLoading(isComponentLoading)

  const fetchResult = async () => {
    setLoadingState(true);
    const movieGenres = await getDatasets(movieGenreUrl);
    const tvGenres = await getDatasets(tvGenreUrl);
    const { status_message } = movieGenres;
    if (movieGenres.status_message ||
      tvGenres.status_message) {
      setErrorMessage(status_message);
    } else {
      const sectionedResult = sectionResult(movieGenres, tvGenres)
      setResult(sectionedResult);
    }

    return setLoadingState(false);
  }

  const sectionResult = (movieGenres, tvGenres) => {
    return [{ title: 'Movie Genres', data: movieGenres.genres },
    { title: 'TV Series Genres', data: tvGenres.genres }]
  }

  const handleLoadMedia = async (id, title) => {
    const url = moreDetailsUrl(id);
    setLoadMedia([true, url])
  }

  if (errorMessage) {
    return (
      <ErrorHandler
        message={errorMessage}
        retryRequest={() => fetchResult()} />
    )
  }

  if (loadMedia[0]) {
    const MediaGenre = withResultRenderer(MediaList, loadMedia[1]);
    console.log(loadMedia[1]);
    return <MediaGenre />
  }

  const _renderGenres = ({ item: { name, id }, section: { title } }) => (
    <TouchableWithoutFeedback onPress={() => handleLoadMedia(id, title)}>
      <Text style={styles.genre}>{name}</Text>
    </TouchableWithoutFeedback>
  );

  const _renderHeader = ({ section: { title } }) => (
    <Text style={styles.headText}>{title}</Text>
  )

  const _keyExtractor = (item) => item.id;

  return (
    <>
      {isLoading ? <LoadingAnimation /> :
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={result}
            keyExtractor={_keyExtractor}
            renderItem={_renderGenres}
            renderSectionHeader={_renderHeader}
          />
        </SafeAreaView>
      }
    </>
  )
};

const styles = StyleSheet.create({
  genre: {
    marginVertical: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: TextSizes.Medium,
    backgroundColor: Colors.Grey,
  },
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  headText: {
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.Cream,
    fontSize: TextSizes.Large,
    backgroundColor: Colors.AmberRed
  }
});

export default Genres;