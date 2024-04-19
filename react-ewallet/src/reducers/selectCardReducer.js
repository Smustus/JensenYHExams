import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
  
const cardsSlice = createSlice({
  name: 'selectedCard',
  initialState,
  reducers: {
    selectCard(state, action) {
      console.log(action.payload);
      return action.payload;
    }
  }
});

export const { selectCard } = cardsSlice.actions;

export default cardsSlice.reducer;