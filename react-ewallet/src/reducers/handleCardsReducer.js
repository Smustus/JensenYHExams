import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cards'));
  
const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard(state, action) {
      console.log(action.payload);
      if(!state){
        const cards = [action.payload];
        localStorage.setItem('cards', JSON.stringify(cards));
        return cards;
      } else {
        const cards = [...state, action.payload];
        localStorage.setItem('cards', JSON.stringify(cards));   
        return cards;
      }
    },
    removeCard(state, action) {
      console.log(action.payload);
      const filtered = state.filter((card) => {
        return card.cardNum !== action.payload.cardNum
      });
      localStorage.setItem('cards', JSON.stringify(filtered));
      return filtered;
    }
  }
});

export const { addCard, removeCard } = cardsSlice.actions;

export default cardsSlice.reducer;