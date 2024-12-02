import React, { useState } from "react";
import CardList from "./components/CardList";
import FilterButton from "./components/FilterButton";
import styles from "./App.module.css";

const App = () => {
  const [showLiked, setShowLiked] = useState(false);

  return (
    <div className={styles.App}>
      <FilterButton onFilter={setShowLiked} />
      <CardList showLiked={showLiked} />
    </div>
  );
};

export default App;
