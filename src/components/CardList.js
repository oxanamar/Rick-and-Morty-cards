import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const CardList = ({ showLiked }) => {
  const { cards, likedCards } = useSelector((state) => state.cards);

  const filteredCards = showLiked
    ? cards.filter((card) => likedCards.includes(card.id))
    : cards;

  return (
    <div className="card-list">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
