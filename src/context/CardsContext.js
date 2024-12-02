import React, { createContext, useState, useEffect } from "react";

export const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [likedCards, setLikedCards] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.results.map((item) => ({
          id: item.id,
          image: item.image,
          title: item.name,
          description: item.status,
          isLiked: false,
        }));
        setCards(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleLike = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isLiked: !card.isLiked } : card
      )
    );

    setLikedCards((prevLiked) =>
      prevLiked.includes(id)
        ? prevLiked.filter((likedId) => likedId !== id)
        : [...prevLiked, id]
    );
  };

  const deleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    setLikedCards((prevLiked) => prevLiked.filter((likedId) => likedId !== id));
  };

  return (
    <CardsContext.Provider
      value={{ cards, likedCards, toggleLike, deleteCard }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
