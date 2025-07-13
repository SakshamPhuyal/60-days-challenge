import React, { useState } from "react";
function List() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);

  function handleAddfood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    if (newFood.trim() !== "") {
      setFoods([...foods, newFood]);
    }
  }
  function handleRemovefood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <div className="list-container">
      <h2 className="list-title">List of Foods</h2>
      <ul className="food-list">
        {foods.map((food, index) => (
          <li
            key={index}
            className="food-item"
            onClick={() => handleRemovefood(index)}
          >
            {food}
          </li>
        ))}
      </ul>
      <div className="input-group">
        <input
          type="text"
          id="foodInput"
          className="food-input"
          placeholder="Enter food name"
        />
        <button className="add-button" onClick={handleAddfood}>
          Add Food
        </button>
      </div>
    </div>
  );
}

export default List;
