import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

import {
  Container,
  ViewContainer,
  Logo,
  ShoppingBasket,
  BasketCount,
} from './styles';

Icon.loadFont();

export default function Header({navigation}) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <ViewContainer>
      <Container>
        <Logo onPress={() => navigation.navigate('Main')} />
        <ShoppingBasket onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <BasketCount>{cartSize || 0}</BasketCount>
        </ShoppingBasket>
      </Container>
    </ViewContainer>
  );
}
