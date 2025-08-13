import { useState } from "react";
import React from "react";
import styles from "./Sidebar.module.css";

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

  return (
    <header className={styles["sidebar"]}>
      <div className={styles["sidebar-top"]}>
        <div
          className={`${styles["sidebar-meals"]} ${
            selectedMenu === "meals" ? styles.open : styles.closed
          }`}
          onMouseEnter={() => handleSelectedMenu("meals")}
          onMouseLeave={() => handleSelectedMenu("")}
        >
          Meals
        </div>

        <div
          className={`${styles["sidebar-desserts"]} ${
            selectedMenu === "desserts" ? styles.open : styles.closed
          }`}
          onMouseEnter={() => handleSelectedMenu("desserts")}
          onMouseLeave={() => handleSelectedMenu("")}
        >
          Desserts
        </div>

        <div
          className={`${styles["sidebar-breakfasts"]} ${
            selectedMenu === "breakfasts" ? styles.open : styles.closed
          }`}
          onMouseEnter={() => handleSelectedMenu("breakfasts")}
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
        {selectedMenu === "meals" ? (
          <ul>
            <li>Pasta with Ground Beef</li>
          </ul>
        ) : null}

        {selectedMenu === "desserts" ? (
          <ul>
            <li></li>
          </ul>
        ) : null}
        {selectedMenu === "breakfasts" ? (
          <ul>
            <li></li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}
export default Sidebar;
