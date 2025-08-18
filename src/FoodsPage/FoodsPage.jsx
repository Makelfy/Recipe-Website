import { useContext } from "react";
import styles from "./FoodsPage.module.css";
import RecipeCard from "/src/RecipeCard/RecipeCard.jsx";
import Recipes from "/src/Recipes.json";
import { useFood } from "../MainTemplate";
import AddRecipePage from "../AddRecipePage/AddRecipePage";

function FoodsPage() {
  const { selectedFood } = useFood();
  const foodTypes = ["recipe", "meal", "dessert", "breakfast"];

  let filteredRecipes = Recipes.filter((item) => item.type === selectedFood);

  if (selectedFood === "home") {
    filteredRecipes = Recipes;
  }

  return selectedFood === "addRecipe" ? (
    <AddRecipePage />
  ) : selectedFood === "home" ? (
    <div className={styles["home-page"]}>
      {foodTypes.map((type) =>
        type === "recipe" ? (
          <>
            <h1 key={"Recipes"} className={styles["food-type-header"]}>
              {type}s
            </h1>
            <div key={"recipes-cards"} className={styles["recipes-container"]}>
              {filteredRecipes.map((item) => (
                <RecipeCard
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  minute={item.time}
                  type={item.type}
                  source={item.source}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 key={type} className={styles["food-type-header"]}>
              {type}s
            </h1>
            <div key={type} className={styles["recipes-container"]}>
              {filteredRecipes
                .filter((item) => item.type === type)
                .map((item) => (
                  <RecipeCard
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    minute={item.time}
                    type={item.type}
                    source={item.source}
                  />
                ))}
            </div>
          </>
        )
      )}
    </div>
  ) : (
    <div className={styles["food-pages"]}>
      {filteredRecipes.map((item) => (
        <RecipeCard
          key={item.id}
          id={item.id}
          title={item.name}
          minute={item.time}
          type={item.type}
          source={item.source}
        />
      ))}
    </div>
  );
}
export default FoodsPage;
