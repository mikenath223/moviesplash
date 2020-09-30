import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, Dimensions } from 'react-native';
import Item from './components/Item';

/* eslint-disable camelcase */
const MediaList = ({
  loadedData: { page, total_pages, results },
  getMoreDetails, handleGetNextPage, handleGetPrevPage,
}) => {
  const renderItem = ({ item }) => (
    <Item
      item={item}
      handleGetDetails={getMoreDetails}
    />
  );

  const keyExtractor = item => `${item.id}`;

  const { height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1, height }}>
      <FlatList
        data={results}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={() => handleGetPrevPage(page)}
        refreshing={false}
        onEndReachedThreshold={0.1}
        onEndReached={() => handleGetNextPage(page, total_pages)}
      />
    </View>
  );
};

MediaList.propTypes = {
  loadedData: PropTypes.oneOfType([PropTypes.string]).isRequired,
  getMoreDetails: PropTypes.func.isRequired,
  handleGetNextPage: PropTypes.func.isRequired,
  handleGetPrevPage: PropTypes.func.isRequired,
};

export default MediaList;
