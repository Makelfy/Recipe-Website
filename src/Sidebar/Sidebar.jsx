import { useState } from "react";
import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpening() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button
        className={styles["sidebar-menu-button"]}
        onClick={handleMenuOpening}
      >
        Menu
      </button>
      <details className={styles["sidebar-meals"]}>
        <summary>Meals</summary>
        <ul>
          <li>Pasta with Ground Beef</li>
        </ul>
      </details>

      <details className={styles["sidebar-desserts"]}>
        <summary>Desserts</summary>
        <ul>
          <li></li>
        </ul>
      </details>

      <details className={styles["sidebar-breakfast"]}>
        <summary>Breakfasts</summary>
        <ul>
          <li></li>
        </ul>
      </details>
    </aside>
  );
}
export default Sidebar;
