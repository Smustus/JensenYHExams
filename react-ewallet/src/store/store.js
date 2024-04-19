import { configureStore } from '@reduxjs/toolkit'; 
import handleCardsReducer from '../reducers/handleCardsReducer';
import selectCardReducer from '../reducers/selectCardReducer';

const store = configureStore({
  reducer: {
    cards: handleCardsReducer,
    selectedCard: selectCardReducer,
  }
});

export default store;