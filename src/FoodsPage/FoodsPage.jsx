import styles from "./FoodsPage.module.css";
import RecipeCard from "/src/RecipeCard/RecipeCard.jsx";
import Recipes from "/src/Recipes.json";
import { useFood } from "../MainTemplate";
import AddRecipePage from "../AddRecipePage/AddRecipePage";

function FoodsPage() {
  const { selectedFood, setSelectedFood } = useFood();
  const foodTypes = ["all type", "meal", "dessert", "breakfast"];

  function getRecipesByType(type) {
    if (type === "all type") return Recipes;
    return Recipes.filter((item) => item.type === type);
  }

  function renderRecipes(recipes) {
    return recipes.map((item) => (
      <RecipeCard
        key={item.id}
        id={item.id}
        title={item.name}
        minute={item.time}
        type={item.type}
        source={item.source}
        className={styles["recipe-card"]}
      />
    ));
  }

  if (selectedFood === "addRecipe") {
    return <AddRecipePage />;
  }

  if (selectedFood === "home") {
    return (
      <div className={styles["home-page"]}>
        {foodTypes.map((type) => (
          <div key={type}>
            <div
              className={styles["food-type-header-container"]}
              onClick={() => setSelectedFood(type)}
            >
              <h1 className={styles["food-type-header"]}>{type}s</h1>
              <div className={styles["food-type-header-arrow"]}>→</div>
            </div>

            <div className={styles["recipes-container"]}>
              {renderRecipes(getRecipesByType(type))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles["food-pages"]}>
      {renderRecipes(getRecipesByType(selectedFood))}
    </div>
  );
}

export default FoodsPage;
