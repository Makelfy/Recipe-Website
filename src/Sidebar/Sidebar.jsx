import { useState } from "react";
import styles from "./Sidebar.module.css";
import { useFood, useFoodCard } from "/src/MainTemplate.jsx";
import Recipes from "/src/Recipes.json";

function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  const { selectedFood, setSelectedFood } = useFood();
  const { setSelectedFoodCard } = useFoodCard();

  const foodTypes = ["meal", "dessert", "breakfast"];

  function handleSelectedMenu(type) {
    setIsOpenMenu(true);
    setSelectedMenu(type);

    if (type === "") {
      setIsOpenMenu(false);
      setSelectedMenu("");
    }
  }
  function handleClickedMenu(type) {
    setSelectedFood(type);
    setSelectedFoodCard("");
  }
  function handleClickedFood(id) {
    setSelectedFoodCard(id);
  }

  return (
    <header className={styles["sidebar"]}>
      <div className={styles["sidebar-top"]}>
        <div
          className={`${styles["sidebar-home"]} ${
            selectedFood === "home" ? styles.open : styles.closed
          }`}
          onClick={() => handleClickedMenu("home")}
        >
          Home
        </div>

        <div className={styles["sidebar-gap"]}></div>

        {foodTypes.map((item) => (
          <div
            className={`${styles["sidebar-food"]} ${
              selectedMenu === item || selectedFood === item
                ? styles.open
                : styles.closed
            }`}
            onClick={() => handleClickedMenu(item)}
            onMouseEnter={() => handleSelectedMenu(item)}
            onMouseLeave={() => handleSelectedMenu("")}
            key={item}
          >
            {item}s
          </div>
        ))}

        <div className={styles["sidebar-gap"]}></div>

        <div
          className={styles["sidebar-add-recipe"]}
          onClick={() => handleClickedMenu("addRecipe")}
        >
          Add Recipe
        </div>
      </div>

      <div
        className={`${styles["sidebar-bottom"]} ${
          isOpenMenu ? styles.open : styles.closed
        }`}
        onMouseEnter={() => handleSelectedMenu(selectedMenu)}
        onMouseLeave={() => handleSelectedMenu("")}
      >
        {foodTypes.map((foodType) =>
          selectedMenu === foodType ? (
            <ul
              className={styles["sidebar-food-item-container"]}
              key={foodType}
            >
              {Recipes.filter((item) => item.type === foodType).map((item) => (
                <li
                  className={styles["sidebar-food-item-list"]}
                  onClick={() => handleClickedFood(item.id)}
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : null
        )}
      </div>
    </header>
  );
}
export default Sidebar;
