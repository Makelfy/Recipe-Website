import styles from "./AddRecipePage.module.css";

function AddRecipePage() {
  return (
    <div className={styles["add-recipe-container"]}>
      <h2 className={styles["add-recipe-title"]}>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Enter your recipe's name"
        className={styles["recipe-name-input"]}
      />
      <select>
        <option>Meal</option>
        <option>Dessert</option>
        <option>Breakfast</option>
      </select>
      <input
        type="number"
        placeholder="Enter how many minutes it takes to make this recipe"
      />
      <textarea
        placeholder="Enter the recipe instructions"
        className={styles["recipe-instructions-textarea"]}
      ></textarea>
      <input type="file" accept="image/*,video/*" />
      <button className={styles["submit-recipe-button"]}>Submit Recipe</button>
    </div>
  );
}
export default AddRecipePage;
