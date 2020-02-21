import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';
import globals from '../../styles/globals';

export const ViewContainer = styled.SafeAreaView`
  flex: 0;
  background: ${globals.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 25px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 250px;
  height: 30px;
`;

export const ShoppingBasket = styled.TouchableOpacity`
  flex: 1;
  width: 24px;
  height: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const BasketCount = styled.Text`
  overflow: hidden;
  position: absolute;
  text-align: center;
  min-width: 18px;
  min-height: 18px;
  background: ${globals.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
`;
