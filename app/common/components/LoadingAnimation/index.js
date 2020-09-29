import React, { useEffect } from 'react';
import {
  View, Animated, StyleSheet, Easing,
} from 'react-native';
import spinner from 'moviesplash/assets/spinner.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loader: {
    width: 100,
    height: 100,
  },
});

const LoadingAnimation = () => {
  const spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rollingLoop = () => {
    spinValue.setValue(0);
    Animated.timing(
      spinValue,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      },
    ).start(() => rollingLoop());
  };

  useEffect(() => {
    rollingLoop();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={spinner}
        style={[styles.loader, { transform: [{ rotate: spin }] },
        ]}
      />
    </View>
  );
};

export default LoadingAnimation;
