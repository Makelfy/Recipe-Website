import { useContext } from "react";
import styles from "./MealsPage.module.css";
import RecipeCard from "/src/RecipeCard/RecipeCard.jsx";
import Recipes from "/src/Recipes.json";
import { useFood } from "../MainTemplate";

function FoodsPage() {
  const { selectedFood } = useFood();

  let filteredRecipes = Recipes.filter((item) => item.type === selectedFood);

  if (selectedFood === "home") {
    filteredRecipes = Recipes;
  }

  return (
    <>
      {filteredRecipes.map((item) => (
        <RecipeCard
          key={item.id}
          title={item.name}
          minute={item.time}
          type={item.type}
          source={item.source}
        />
      ))}
    </>
  );
}
export default FoodsPage;
