
import { createStore } from 'redux';
import cartReducer from './reducer';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
  }
};

const store = createStore(cartReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
