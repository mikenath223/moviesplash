import styled from 'styled-components/native';
import Colors from 'ms/common/constants/colors';

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.AmberRed}
`;

export const NavSection = styled.View`
  height: 450px;
  width: 260px;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  background-color: ${Colors.Cream};
`;

export const NavItem = styled.TouchableHighlight`
  border-color: ${Colors.Silver};
  border-width: 2px;
  padding: 10px;
  height: 50px;
  margin: 50px 20px 0;
`;

export const Text = styled.Text`
  color: ${props => (props.orange ? Colors.Cream : '#000')};
  text-align: center;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const LogoText = styled.Text`
  font-size: 35px;
  font-weight: 700;
  margin-top: 35px;
  color: ${Colors.Cream}
`;

export default Container;
