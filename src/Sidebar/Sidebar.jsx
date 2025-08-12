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
    <header
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <button
        className={styles["sidebar-menu-button"]}
        onClick={handleMenuOpening}
      >
        Menu
      </button>

      <div>
        <p className={styles["sidebar-desserts"]}>Meals</p>
      </div>

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
    </header>
  );
}
export default Sidebar;
