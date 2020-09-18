import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Item from 'ms/common/components/Item';
import { API_KEY } from 'ms/common/constants';

const Trending = () => {
  const [trends, setTrends] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTrends();
  }, []);

  const fetchTrends = async () => {
    try {
      const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`;
      fetch(trendingUrl).then(res => res.json())
        .then(json => {
          setTrends(json.results);
        });
    } catch (error) {
      setError(error.message);
      throw new Error(error);
    }
  }

  const _renderItem = ({ item }) => (
    <View style={styles.padding}>
      <Item item={item} />
    </View>
  )

  const _keyExtractor = (item) => item.id

  if (error) {
    return (
      <View>
        <Text style={styles.error}>
          {error}
        </Text>
      </View>
    )
  }

  return (
    <>
      <FlatList
        numColumns={2}
        horizontal={false}
        style={styles.flatList}
        data={trends}
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
      flex: 1,
    },
    padding: {
      paddingHorizontal: 5
    },
    error: {
      fontSize: 20
    }
  }
)

export default Trending;