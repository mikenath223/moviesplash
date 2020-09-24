import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Container } from 'moviesplash/styles/container.styled';
import { createStackNavigator } from '@react-navigation/stack';
import Trending from 'ms/screens/Trending';
import Home from 'ms/screens/Home';
import Category from 'ms/screens/Category';
import constants from 'ms/common/constants';
import Colors from 'ms/common/constants/colors';

const App = () => {
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, constants.SplashScreenDelayMs);
  }, []);

  const headerOptions = {
    headerStyle: {
      backgroundColor: Colors.Silver,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',
    headerTintColor: Colors.AmberRed,
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.Silver} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={headerOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Category} />
        <Stack.Screen name="Trending Movies/Series" component={Trending} />
      </Stack.Navigator>
    </Container>
  );
};

export default App;
