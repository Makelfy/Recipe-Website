import { useContext } from "react";
import styles from "./MealsPage.module.css";
import RecipeCard from "/src/RecipeCard/RecipeCard.jsx";
import Recipes from "/src/Recipes.json";
import { useMeal } from "../MainTemplate";

function MealsPage() {
  const { selectedMeal } = useMeal();
  const selectedMenu = selectedMeal;

  const filteredRecipes = [];

  if (selectedMenu !== "") {
    const filteredRecipes = Recipes.filter(
      (item) => item.type === selectedMenu
    );
    console.log(filteredRecipes);
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
export default MealsPage;
