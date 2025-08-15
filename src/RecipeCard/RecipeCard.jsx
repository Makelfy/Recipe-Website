import React from "react";
import styles from "./RecipeCard.module.css";
import { useFoodCard } from "/src/MainTemplate.jsx";

function RecipeCard(props) {
  const { selectedFoodCard, setSelectedFoodCard } = useFoodCard("");

  function handleOpenRecipe(id) {
    setSelectedFoodCard(id);
  }

  return (
    <>
      <div
        className={styles["recipe-card-box"]}
        onClick={() => handleOpenRecipe(props.id)}
      >
        <h1 className={styles["recipe-card-title"]}>{props.title}</h1>
        <video controls className={styles["recipe-card-video"]}>
          <source src={props.source} type="video/mp4" />
        </video>
        <br />
        <p className={styles["recipe-card-text"]}>{props.minute} minutes</p>
        <br />
        <p className={styles["recipe-card-text"]}>{props.type}</p>
      </div>
    </>
  );
}

export default RecipeCard;
