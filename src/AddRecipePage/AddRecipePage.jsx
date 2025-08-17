import styles from "./AddRecipePage.module.css";
import { useState, useRef, useEffect } from "react";
import RecipesData from "../../src/Recipes.json";

function AddRecipePage() {
  const [recipes, setRecipes] = useState(RecipesData);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    type: "Meal",
    ingredients: ["", "", ""],
    time: "",
    instructions: "",
    source: null,
    preview: null,
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    const stored = localStorage.getItem("recipes");
    if (stored) {
      setRecipes(JSON.parse(stored));
    }
  }, []);

  function handleIngredientChange(index, value) {
    const updatedIngredients = [...newRecipe.ingredients];
    updatedIngredients[index] = value;
    setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
  }

  function handleAddIngredient() {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, ""],
    });
  }

  function handleRemoveIngredient(index) {
    const updatedIngredients = [...newRecipe.ingredients];
    updatedIngredients.splice(index, 1);
    setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      setNewRecipe({
        ...newRecipe,
        source: file,
        preview: URL.createObjectURL(file),
      });
    }
  }

  function handleAddRecipe() {
    if (!newRecipe.name || !newRecipe.time || !newRecipe.instructions) {
      alert("Please fill in all required fields.");
      return;
    }

    setRecipes([
      ...recipes,
      {
        id: recipes.length + 1,
        ...newRecipe,
      },
    ]);

    setNewRecipe({
      name: "",
      type: "Meal",
      ingredients: ["", "", ""],
      time: "",
      instructions: "",
      source: null,
      preview: null,
    });
    fileInputRef.current.value = null;

    alert("Recipe added successfully!");
    console.log("New Recipe Added:", newRecipe);
  }

  return (
    <div className={styles["add-recipe-container"]}>
      <h2 className={styles["add-recipe-title"]}>Add a New Recipe</h2>

      <input
        type="text"
        placeholder="Enter your recipe's name"
        className={styles["recipe-name-input"]}
        value={newRecipe.name}
        onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
      />

      <select
        className={styles["recipe-type-select"]}
        onChange={(e) => setNewRecipe({ ...newRecipe, type: e.target.value })}
        value={newRecipe.type}
      >
        <option>Meal</option>
        <option>Dessert</option>
        <option>Breakfast</option>
      </select>

      <input
        type="number"
        value={newRecipe.time}
        placeholder="Enter how many minutes it takes to make this recipe"
        onChange={(e) => setNewRecipe({ ...newRecipe, time: e.target.value })}
        className={styles["recipe-time-input"]}
      />

      <textarea
        placeholder="Enter the recipe instructions"
        className={styles["recipe-input-instructions"]}
        value={newRecipe.instructions}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, instructions: e.target.value })
        }
      ></textarea>

      <div className={styles["ingredients-container"]}>
        <h3 className={styles["ingredients-title"]}>Ingredients</h3>
        {newRecipe.ingredients.map((ingredient, index) => (
          <div key={index} className={styles["ingredient-row"]}>
            <input
              type="text"
              placeholder={`Ingredient ${index + 1}`}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className={styles["recipe-ingredient-input"]}
            />
            <button
              type="button"
              onClick={() => handleRemoveIngredient(index)}
              className={styles["remove-ingredient-button"]}
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleAddIngredient}
        className={styles["add-ingredient-button"]}
      >
        + Add Ingredient
      </button>

      <input
        type="file"
        accept="image/*,video/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className={styles["recipe-file-input"]}
      />

      {newRecipe.preview && (
        <div className={styles["preview-container"]}>
          {newRecipe.source.type.startsWith("image/") ? (
            <img
              src={newRecipe.preview}
              alt="Preview"
              className={styles["preview-image"]}
            />
          ) : (
            <video
              src={newRecipe.preview}
              controls
              className={styles["preview-video"]}
            />
          )}
        </div>
      )}

      <button
        className={styles["submit-recipe-button"]}
        onClick={handleAddRecipe}
      >
        Submit Recipe
      </button>
    </div>
  );
}

export default AddRecipePage;
