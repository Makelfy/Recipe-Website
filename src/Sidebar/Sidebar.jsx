import { useState } from "react";
import styles from "./Sidebar.module.css";
import { useFood, useFoodCard } from "/src/MainTemplate.jsx";
import Recipes from "/src/Recipes.json";

function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState("");

  const { selectedFood, setSelectedFood } = useFood();
  const { setSelectedFoodCard } = useFoodCard();

  const foodTypes = ["all type", "meal", "dessert", "breakfast"];

  // === Handlers ===
  function handleMenuClick(type) {
    setSelectedFood(type);
    setSelectedFoodCard("");
  }

  function handleFoodClick(item) {
    setSelectedFood(item.type);
    setSelectedFoodCard(item.id);
  }

  function handleMenuHover(type) {
    if (type) {
      setIsOpenMenu(true);
      setHoveredMenu(type);
    } else {
      setIsOpenMenu(false);
      setHoveredMenu("");
    }
  }

  // === Helper: get recipes by menu ===
  function getRecipesByType(type) {
    if (type === "all type") return Recipes;
    return Recipes.filter((item) => item.type === type);
  }

  return (
    <header className={styles.sidebar}>
      {/* Top Section */}
      <div className={styles["sidebar-top"]}>
        {/* Home button */}
        <div
          className={`${styles["sidebar-home"]} ${
            selectedFood === "home" ? styles.open : styles.closed
          }`}
          onClick={() => handleMenuClick("home")}
        >
          Home
        </div>

        <div className={styles["sidebar-gap"]}></div>

        {/* Food Type buttons */}
        {foodTypes.map((type) => (
          <div
            key={type}
            className={`${styles["sidebar-food"]} ${
              hoveredMenu === type || selectedFood === type
                ? styles.open
                : styles.closed
            }`}
            onClick={() => handleMenuClick(type)}
            onMouseEnter={() => handleMenuHover(type)}
            onMouseLeave={() => handleMenuHover("")}
          >
            {type}s
          </div>
        ))}

        <div className={styles["sidebar-gap"]}></div>

        {/* Add Recipe button */}
        <div
          className={styles["sidebar-add-recipe"]}
          onClick={() => handleMenuClick("addRecipe")}
        >
          Add Recipe
        </div>
      </div>

      {/* Bottom Section (submenu with recipes) */}
      <div
        className={`${styles["sidebar-bottom"]} ${
          isOpenMenu ? styles.open : styles.closed
        }`}
        onMouseEnter={() => handleMenuHover(hoveredMenu)}
        onMouseLeave={() => handleMenuHover("")}
      >
        {hoveredMenu && (
          <ul className={styles["sidebar-food-item-container"]}>
            {getRecipesByType(hoveredMenu).map((item) => (
              <li
                key={item.id}
                className={styles["sidebar-food-item-list"]}
                onClick={() => handleFoodClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Sidebar;
