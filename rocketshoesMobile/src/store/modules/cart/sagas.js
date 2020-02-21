import {call, put, all, takeLatest, select} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../services/api';
import {addToCartSuccess, updateAmountSuccess} from './actions';
import {formatPrice} from '../../../utils/format';
import Navigation from '../../../services/navigation';

function* addToCart({id}) {
  const searchProduct = yield select(state =>
    state.cart.find(p => p.id === id),
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = searchProduct ? searchProduct.amount : 0;

  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora do estoque.');
    return;
  }

  if (searchProduct) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    Navigation.navigate('Cart');
  }
}

function* updateAmount({id, amount}) {
  if (amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade selecionada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
