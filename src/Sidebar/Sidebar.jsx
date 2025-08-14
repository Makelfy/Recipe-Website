import { useState } from "react";
import React from "react";
import styles from "./Sidebar.module.css";
import { useFood } from "/src/MainTemplate.jsx";
import Recipes from "/src/Recipes.json";

function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

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
  }

  const { selectedFood, setSelectedFood } = useFood();

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

        <div
          className={`${styles["sidebar-food"]} ${
            selectedMenu === "meal" || selectedFood === "meal"
              ? styles.open
              : styles.closed
          }`}
          onClick={() => handleClickedMenu("meal")}
          onMouseEnter={() => handleSelectedMenu("meal")}
          onMouseLeave={() => handleSelectedMenu("")}
        >
          Meals
        </div>

        <div
          className={`${styles["sidebar-food"]} ${
            selectedMenu === "dessert" || selectedFood === "dessert"
              ? styles.open
              : styles.closed
          }`}
          onClick={() => handleClickedMenu("dessert")}
          onMouseEnter={() => handleSelectedMenu("dessert")}
          onMouseLeave={() => handleSelectedMenu("")}
        >
          Desserts
        </div>

        <div
          className={`${styles["sidebar-food"]} ${
            selectedMenu === "breakfast" || selectedFood === "breakfast"
              ? styles.open
              : styles.closed
          }`}
          onClick={() => handleClickedMenu("breakfast")}
          onMouseEnter={() => handleSelectedMenu("breakfast")}
          onMouseLeave={() => handleSelectedMenu("")}
        >
          Breakfasts
        </div>
      </div>

      <div
        className={`${styles["sidebar-bottom"]} ${
          isOpenMenu ? styles.open : styles.closed
        }`}
        onMouseEnter={() => handleSelectedMenu(selectedMenu)}
        onMouseLeave={() => handleSelectedMenu("")}
      >
        {selectedMenu === "meal" ? (
          <ul>
            {Recipes.filter((item) => item.type === "meal").map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : null}

        {selectedMenu === "dessert" ? (
          <ul>
            {Recipes.filter((item) => item.type === "dessert").map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : null}
        {selectedMenu === "breakfast" ? (
          <ul>
            {Recipes.filter((item) => item.type === "breakfast").map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </header>
  );
}
export default Sidebar;
