import React from "react";
import styles from "./RecipeCard.module.css";

function RecipeCard(props) {
  return (
    <>
      <div className={styles["recipe-card-box"]}>
        <h1 className={styles["recipe-card-title"]}>{props.title}</h1>
        <video controls className={styles["recipe-card-video"]}>
          <source
            src="src\assets\THE BEST Bulking Meal Prep, Creamy Garlic Beef Pasta, OVER 1000 calories with 72g Protein 🔥💪🏽.mp4"
            type="video/mp4"
          />
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
