import styled from 'styled-components/native';
import {darken} from 'polished';

import globals from '../../styles/globals';

export const Wrapper = styled.View`
  background: ${globals.dark};
  height: 100%;
`;

export const Container = styled.View`
  padding-top: 130px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  width: 300px;
`;

export const Image = styled.Image`
  height: 250px;
  width: 250px;
`;

export const Title = styled.Text`
  font-size: 15px;
`;

export const Price = styled.Text`
  font-size: 18px;
  margin: 14px 0;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddBtn = styled.TouchableOpacity`
  background: ${globals.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  margin-top: auto;
`;

export const Amount = styled.View`
  background: ${darken(0.03, globals.primary)};
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const AmountText = styled.Text`
  margin: 0 4px 0 10px;
  color: #fff;
`;

export const BtnText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
