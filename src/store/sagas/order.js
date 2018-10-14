import {put} from 'redux-saga/effects';
import axios from '../../AxiosOrders';
import * as actions from '../actions/index';

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());

  try {
    const res = yield axios.post('/orders.json?auth=' + action.token, action.orderData);
    yield put(actions.burgerPurchaseSuccess(res.data.name, action.orderData));
  } catch(error) {
    yield put(actions.burgerPurchaseFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());

  const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';

  try {
    const res = yield axios.get('orders.json' + queryParams);

    let fetchedorders = [];
    for (let key in res.data) {
      fetchedorders.push({
        ...res.data[key],
        id: key
      })
    }

    yield put(actions.fetchOrdersSuccess(fetchedorders));
  } catch(error) {
    yield put(actions.fetchOrdersFail(error));
  }
}