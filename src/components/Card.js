import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike, deleteCard } from "../store/slice";

const Card = ({ card }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <button onClick={() => dispatch(toggleLike(card.id))}>
        {card.isLiked ? "❤️" : "🤍"}
      </button>
      <button onClick={() => dispatch(deleteCard(card.id))}>🗑️</button>
    </div>
  );
};

export default Card;
