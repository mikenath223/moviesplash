import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Container } from 'moviesplash/styles/container.styled';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Trending from 'ms/screens/Trending';
import Home from 'ms/screens/Home';
import Category from 'ms/screens/Category';
import constants from 'ms/common/constants';

const App = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, constants.SplashScreenDelayMs);
  }, []);

  return (
    <Container>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Categories" component={Category} />
        <Drawer.Screen name="Trending Movies/Series" component={Trending} />
      </Drawer.Navigator>
    </Container>
  );
};

export default App;
