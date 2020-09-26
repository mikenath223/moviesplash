import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import Item from './components/Item';

const MediaList = ({ loadedData: { page, total_pages, results }, 
  getMoreDetails, handleGetNextPage, handleGetPrevPage }) => {
  const _renderItem = ({ item }) => (
    <Item item={item}
      handleGetDetails={getMoreDetails} />
  )

  const _keyExtractor = (item) => item.id + '';

  const { height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1, height }}>
      <FlatList
        data={results}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        onRefresh={() => handleGetPrevPage(page)}
        refreshing={false}
        onEndReachedThreshold={0.1}
        onEndReached={() => handleGetNextPage(page, total_pages)}
      />
    </View>
  )
}

export default MediaList;