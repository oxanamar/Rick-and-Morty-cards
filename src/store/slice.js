import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [], // Все карточки
  likedCards: [], // ID залайканных карточек
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    toggleLike(state, action) {
      const cardId = action.payload;

      const card = state.cards.find((card) => card.id === cardId);
      if (card) {
        card.isLiked = !card.isLiked;
      }

      //Update the likeCards array
      if (state.likedCards.includes(cardId)) {
        // Remove card ID from likedCards
        state.likedCards = state.likedCards.filter((id) => id !== cardId);
      } else {
        // Add card ID to likedCards
        state.likedCards.push(cardId);
      }
    },
    deleteCard(state, action) {
      const cardId = action.payload;
      state.cards = state.cards.filter((card) => card.id !== cardId);
      state.likedCards = state.likedCards.filter((id) => id !== cardId);
    },
  },
});

export const { setCards, toggleLike, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;
