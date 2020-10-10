import React, { useState, useEffect } from 'react';
import {
  SectionList, SafeAreaView,
  Text, StyleSheet, TouchableWithoutFeedback,
} from 'react-native';
import ListItem from 'ms/common/components/ListItem';
import LoadingAnimation from 'ms/common/components/LoadingAnimation';
import ErrorHandler from 'ms/common/components/ErrorHandler';
import Colors from 'ms/common/constants/colors';
import TextSizes from 'ms/common/constants/textSizes';
import getDatasets from 'ms/common/utils/request';
import { movieGenreUrl, tvGenreUrl, moreDetailsUrl } from 'ms/common/constants';
import withResultRenderer from 'ms/common/components/withResultRenderer';

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
    marginHorizontal: 10,
  },
  headText: {
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.Cream,
    fontSize: TextSizes.Large,
    backgroundColor: Colors.AmberRed,
  },
});

const Genres = () => {
  const [result, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [loadMedia, setLoadMedia] = useState([false]);

  const setLoadingState = isComponentLoading => setIsLoading(isComponentLoading);

  const sectionResult = (movieGenres, tvGenres) => [{ title: 'Movie Genres', data: movieGenres.genres },
    { title: 'TV Series Genres', data: tvGenres.genres }];

  /* eslint-disable camelcase */
  const fetchResult = async () => {
    setLoadingState(true);
    const movieGenres = await getDatasets(movieGenreUrl);
    const tvGenres = await getDatasets(tvGenreUrl);
    const { status_message } = movieGenres;
    if (movieGenres.status_message
      || tvGenres.status_message) {
      setErrorMessage(status_message);
    } else {
      const sectionedResult = sectionResult(movieGenres, tvGenres);
      setResult(sectionedResult);
    }

    return setLoadingState(false);
  };

  useEffect(() => {
    fetchResult();
  }, []);

  const handleLoadMedia = async (id, title) => {
    const url = moreDetailsUrl(id, title);
    setLoadMedia([true, url, title]);
  };

  if (errorMessage) {
    return (
      <ErrorHandler
        message={errorMessage}
        retryRequest={() => fetchResult()}
      />
    );
  }

  const [isLoadGenre, url, title] = loadMedia;
  if (isLoadGenre) {
    const MediaGenre = withResultRenderer(ListItem, url, title);
    return <MediaGenre altMediaType={title} />;
  }

  const renderGenres = ({ item: { name, id }, section: { title } }) => (
    <TouchableWithoutFeedback onPress={() => handleLoadMedia(id, title)}>
      <Text style={styles.genre}>{name}</Text>
    </TouchableWithoutFeedback>
  );

  const renderHeader = ({ section: { title } }) => (
    <Text style={styles.headText}>{title}</Text>
  );

  const keyExtractor = item => item.id;

  return (
    <>
      {isLoading ? <LoadingAnimation />
        : (
          <SafeAreaView style={styles.container}>
            <SectionList
              sections={result}
              keyExtractor={keyExtractor}
              renderItem={renderGenres}
              renderSectionHeader={renderHeader}
            />
          </SafeAreaView>
        )}
    </>
  );
};

export default Genres;
