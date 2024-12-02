import React, { useContext } from "react";
import { CardsContext } from "../context/CardsContext";
import styles from "./Card.module.css";

const Card = ({ card }) => {
  const { toggleLike, deleteCard } = useContext(CardsContext);

  return (
    <div className={styles.card}>
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div className={styles.buttonContainer}>
        <button onClick={() => toggleLike(card.id)}>
          {card.isLiked ? "❤️" : "🤍"}
        </button>
        <button onClick={() => deleteCard(card.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default Card;
