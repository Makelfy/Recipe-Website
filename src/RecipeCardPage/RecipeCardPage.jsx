import styles from "./RecipeCardPage.module.css";
import { useFoodCard } from "../MainTemplate";
import Recipes from "/src/Recipes.json";

function RecipeCardPage() {
  const { selectedFoodCard } = useFoodCard();

  const foodCard = Recipes.find((item) => item.id === selectedFoodCard);

  return (
    <div>
      <div>
        <video controls className={styles["recipe-card-page-video"]}>
          <source src={foodCard.source} type="video/mp4" />
        </video>
      </div>
      <div>
        <h2>{foodCard.name}</h2>
        <h3>{foodCard.type}</h3>
        <h4>{foodCard.time} minutes to make</h4>
        <ul>
          {foodCard.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>{foodCard.instructions}</p>
      </div>
    </div>
  );
}

export default RecipeCardPage;
