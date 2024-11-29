import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCards } from "./store/slice";
import CardList from "./components/CardList";
import FilterButton from "./components/FilterButton";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        const data = response.data.results.map((item) => ({
          id: item.id,
          image: item.image,
          title: item.name,
          description: item.status,
        }));
        dispatch(setCards(data));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dispatch]);

  return (
    <div className="App">
      <FilterButton onFilter={setShowLiked} />
      <CardList showLiked={showLiked} />
    </div>
  );
};

export default App;
