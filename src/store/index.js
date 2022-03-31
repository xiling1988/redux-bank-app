import reducer from '../reducers';
import { createStore } from 'redux';

const initialState = {
  username: "Janny",
  totalAmount: 2500701
}

const store = createStore(reducer, initialState);

export default store;