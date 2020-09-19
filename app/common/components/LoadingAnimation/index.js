import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Container from './LoadingAnimation.styled';
import Colors from 'ms/common/constants/colors';

const LoadingAnimation = () => {
  const spinValue = new Animated.Value(0);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  const rollingLoop = () => {
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true
        }
      )
    ).start();
  };


  useEffect(() => {
    rollingLoop();
  }, [])

  return (
    <Container>
      <Animated.View
        style={[styles.loader, { transform: [{ rotate: spin }] }
        ]} />
    </Container>
  )
}

const styles = StyleSheet.create({
  loader: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: Colors.DeepSkyBlue,
    borderBottomColor: Colors.Grey,
  }
})

export default LoadingAnimation;
