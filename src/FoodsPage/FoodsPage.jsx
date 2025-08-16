import { useContext } from "react";
import styles from "./FoodsPage.module.css";
import RecipeCard from "/src/RecipeCard/RecipeCard.jsx";
import Recipes from "/src/Recipes.json";
import { useFood } from "../MainTemplate";
import AddRecipePage from "../AddRecipePage/AddRecipePage";

function FoodsPage() {
  const { selectedFood } = useFood();

  let filteredRecipes = Recipes.filter((item) => item.type === selectedFood);

  if (selectedFood === "home") {
    filteredRecipes = Recipes;
  }

  return selectedFood !== "addRecipe" ? (
    <div className={styles["recipe-cards"]}>
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
  ) : (
    <AddRecipePage />
  );
}
export default FoodsPage;
