import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import {formatPrice} from '../../utils/format';

import {
  Container,
  Product,
  Image,
  Title,
  Price,
  AddBtn,
  Amount,
  AmountText,
  BtnText,
  Wrapper,
} from './styles';

Icon.loadFont();

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {}),
  );

  const dispatch = useDispatch();
  useEffect(() => {
    async function load() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    load();
  }, []);

  function handleAdd(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function render({item}) {
    console.log(item);
    return (
      <Product key={item.id}>
        <Image source={{uri: item.image}} />
        <Title>{item.title}</Title>
        <Price>{formatPrice(item.price)}</Price>
        <AddBtn onPress={() => handleAdd(item.id)}>
          <Amount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <AmountText>{amount[item.id] || 0}</AmountText>
          </Amount>
          <BtnText>ADICIONAR</BtnText>
        </AddBtn>
      </Product>
    );
  }

  return (
    <Wrapper>
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={amount}
          keyExtractor={item => String(item.id)}
          renderItem={render}
        />
      </Container>
    </Wrapper>
  );
}
