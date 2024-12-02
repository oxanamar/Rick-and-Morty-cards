import React, { useContext } from "react";
import Card from "./Card";
import { CardsContext } from "../context/CardsContext";
import styles from "./CardList.module.css";

const CardList = ({ showLiked }) => {
  const { cards, likedCards } = useContext(CardsContext);

  const filteredCards = showLiked
    ? cards.filter((card) => likedCards.includes(card.id))
    : cards;

  return (
    <div className={showLiked ? styles.likedCardsPage : styles.cardList}>
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} isLikedPage={showLiked} />
      ))}
    </div>
  );
};

export default CardList;
