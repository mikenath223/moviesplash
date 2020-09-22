import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import Item from 'ms/common/components/listItem';
import withResultRenderer from 'ms/common/components/withResultRenderer';
import { trendingUrl } from 'ms/common/constants/';

const Trending = ({ loadedData, getMoreDetails }) => {
  const _renderItem = ({ item }) => (
    <Item item={item}
      handleGetDetails={getMoreDetails} />
  )

  const _keyExtractor = (item) => item.id

  return (
    <>
      <FlatList
        numColumns={2}
        horizontal={false}
        style={styles.flatList}
        data={loadedData}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
      />
      <Text>Trends</Text>
    </>
  )
}

const styles = StyleSheet.create(
  {
    flatList: {
      marginHorizontal: 5,
    }
  }
)

export default withResultRenderer(Trending, trendingUrl);