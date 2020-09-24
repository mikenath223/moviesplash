import React from 'react';
import { Container, NavSection, NavItem, Text, LogoText } from './Home.styled';
import Colors from 'ms/common/constants/colors';

const Home = ({ navigation }) => {
  const handleNavigation = (screen) => navigation.navigate(screen);

  return (
    <Container>
      <NavSection>
        <NavItem
          activeOpacity={0.6}
          underlayColor={Colors.Cream}>
          <Text>Home</Text>
        </NavItem>
        <NavItem
          activeOpacity={0.6}
          underlayColor={Colors.Silver}
          onPress={() => handleNavigation('Trending Movies/Series')}>
          <Text>Trends</Text>
        </NavItem>
        <NavItem
          activeOpacity={0.6}
          underlayColor={Colors.Silver}
          onPress={() => handleNavigation('Categories')}>
          <Text>Categories</Text>
        </NavItem>
      </NavSection>
      <LogoText>MovieSplash</LogoText>
      <Text>...your binge movie partner</Text>
    </Container>
  )
};

export default Home;