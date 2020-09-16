import React, { useEffect } from 'react';
import { Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Container } from 'moviesplash/styles/container.styled';
import constants from 'ms/common/constants';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, constants.SplashScreenDelayMs);
  }, [])

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <Text>Hello there</Text>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default App;
