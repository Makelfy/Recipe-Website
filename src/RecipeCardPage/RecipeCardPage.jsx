import styles from "./RecipeCardPage.module.css";
import { useFoodCard } from "../MainTemplate";
import Recipes from "/src/Recipes.json";

function RecipeCardPage() {
  const { selectedFoodCard } = useFoodCard();

  const foodCard = Recipes.find((item) => item.id === selectedFoodCard);

  return (
    <div className={styles["recipe-card-page"]}>
      <div>
        <video controls className={styles["recipe-card-page-video"]}>
          <source src={foodCard.source} type="video/mp4" />
        </video>
      </div>
      <div className={styles["recipe-card-page-text"]}>
        <h2 className={styles["recipe-card-page-name"]}>{foodCard.name}</h2>
        <h3 className={styles["recipe-card-page-type"]}>{foodCard.type}</h3>
        <h4 className={styles["recipe-card-page-time"]}>
          {foodCard.time} minutes to make
        </h4>
        <ul className={styles["recipe-card-page-ingredients"]}>
          {foodCard.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className={styles["recipe-card-page-instructions"]}>
          {foodCard.instructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeCardPage;
