import React, { useState } from "react";
import styles from "./FilterButton.module.css";

const FilterButton = ({ onFilter }) => {
  const [showLiked, setShowLiked] = useState(false);

  const toggleFilter = () => {
    setShowLiked((prev) => !prev);
    onFilter(!showLiked);
  };

  return (
    <button className={styles.filterButton} onClick={toggleFilter}>
      {showLiked ? "Показать все" : "Показать залайканные"}
    </button>
  );
};

export default FilterButton;
