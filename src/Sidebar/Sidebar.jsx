import { useState } from "react";
import React from "react";
import styles from "./Sidebar.module.css";
import { useMeal } from "/src/MainTemplate.jsx";

function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");

  function handleSelectedMenu(type) {
    setIsOpenMenu(true);
    setSelectedMenu(type);
    setSelectedMeal(type);

    if (type === "") {
      setIsOpenMenu(false);
      setSelectedMenu("");
      setSelectedMeal("");
    }
  }

  const { setSelectedMeal } = useMeal();

  return (
    <header className={styles["sidebar"]}>
      <div className={styles["sidebar-top"]}>
        <div
          className={`${styles["sidebar-meals"]} ${
            selectedMenu === "meal" ? styles.open : styles.closed
          }`}
          onMouseEnter={() => handleSelectedMenu("meal")}
          onMouseLeave={() => handleSelectedMenu("")}
        >
          Meals
        </div>

        <div
          className={`${styles["sidebar-desserts"]} ${
            selectedMenu === "dessert" ? styles.open : styles.closed
          }`}
          onMouseEnter={() => handleSelectedMenu("dessert")}
          onMouseLeave={() => handleSelectedMenu("")}
        >
          Desserts
        </div>

        <div
          className={`${styles["sidebar-breakfasts"]} ${
            selectedMenu === "breakfast" ? styles.open : styles.closed
          }`}
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
            <li>Pasta with Ground Beef</li>
          </ul>
        ) : null}

        {selectedMenu === "dessert" ? (
          <ul>
            <li></li>
          </ul>
        ) : null}
        {selectedMenu === "breakfast" ? (
          <ul>
            <li></li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}
export default Sidebar;
