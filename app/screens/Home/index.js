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
          underlayColor={Colors.Cream}
          onPress={() => handleNavigation('Trending Movies/Series')}>
          <Text>Trends</Text>
        </NavItem>
        <NavItem
          activeOpacity={0.6}
          onPress={() => handleNavigation('Categories')}
          underlayColor={Colors.Silver}>
          <Text>Categories</Text>
        </NavItem>
        <NavItem
          activeOpacity={0.6}
          underlayColor={Colors.Silver}>
          <Text>Search</Text>
        </NavItem>
      </NavSection>
      <LogoText>MovieSplash</LogoText>
      <Text>...your binge movie partner</Text>
    </Container>
  )
};

export default Home;