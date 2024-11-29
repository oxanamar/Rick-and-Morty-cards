import React, { useState } from "react";

const FilterButton = ({ onFilter }) => {
  const [showLiked, setShowLiked] = useState(false);

  const toggleFilter = () => {
    setShowLiked((prev) => !prev);
    onFilter(!showLiked);
  };

  return (
    <button onClick={toggleFilter}>
      {showLiked ? "Показать все" : "Показать залайканные"}
    </button>
  );
};

export default FilterButton;
