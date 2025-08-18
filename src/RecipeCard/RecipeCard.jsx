import React, { useEffect, useRef } from "react";
import styles from "./RecipeCard.module.css";
import { useFoodCard } from "/src/MainTemplate.jsx";

function RecipeCard(props) {
  const { setSelectedFoodCard } = useFoodCard("");

  const videoRef = useRef(null);

  useEffect(() => {
    return () => {
      console.log("cleaning vidoe");
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

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

        <video
          controls
          className={styles["recipe-card-video"]}
          ref={videoRef}
          src={props.source}
          type="video/mp4"
        />

        <br />
        <p className={styles["recipe-card-text"]}>{props.minute} minutes</p>
        <br />
        <p className={styles["recipe-card-text"]}>{props.type}</p>
      </div>
    </>
  );
}

export default RecipeCard;
