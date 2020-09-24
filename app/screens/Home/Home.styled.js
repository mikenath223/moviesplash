import styled from 'styled-components/native';
import Colors from 'ms/common/constants/colors';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const NavSection = styled.View`
  height: 470px;
  width: 260px;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  background-color: ${Colors.AmberRed};
`;

export const NavItem = styled.TouchableHighlight`
  background-color: ${Colors.Cream};
  padding: 10px;
  margin: 60px 20px 0;
`;

export const Text = styled.Text`
  color: #000;
  text-align: center;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const LogoText = styled.Text`
  font-size: 35px;
  font-weight: 700;
  margin-top: 35px;
  color: ${Colors.SunsetOrange}
`;