import styles from "./RecipeCardPage.module.css";
import { useFoodCard } from "../MainTemplate";
import Recipes from "/src/Recipes.json";

function RecipeCardPage() {
  const { selectedFoodCard } = useFoodCard();

  const foodCard = Recipes.find((item) => item.id === selectedFoodCard);

  const renderIngredients = () => {
    if (!foodCard.ingredients) return null;

    if (Array.isArray(foodCard.ingredients)) {
      return foodCard.ingredients.map((item) => (
        <li key={item} className={styles["ingredients-list"]}>
          {item}
        </li>
      ));
    }

    // If ingredients is an object/dictionary
    return Object.entries(foodCard.ingredients).map(([category, items]) => (
      <div key={category}>
        <h5 className={styles["ingredient-category"]}>{category}</h5>
        <ul>
          {Array.isArray(items) ? (
            items.map((item) => (
              <li key={item} className={styles["ingredients-list"]}>
                {item}
              </li>
            ))
          ) : (
            <li className={styles["ingredients-list"]}>{items}</li>
          )}
        </ul>
      </div>
    ));
  };

  return (
    <div className={styles["recipe-card-page"]}>
      <div>
        <video
          key={foodCard.id}
          controls
          className={styles["recipe-card-page-video"]}
        >
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
          {" "}
          <strong>Ingredients</strong>
          {renderIngredients()}
        </ul>
        <p className={styles["recipe-card-page-instructions"]}>
          <strong> Instructions </strong> <br />
          <br />
          {foodCard.instructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeCardPage;
