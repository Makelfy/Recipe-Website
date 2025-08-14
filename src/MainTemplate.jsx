import { createContext, useState, useContext } from "react";

const MealContext = createContext();

export function MealProvider({ children }) {
  const [selectedMeal, setSelectedMeal] = useState("");
  return (
    <MealContext.Provider value={{ selectedMeal, setSelectedMeal }}>
      {children}
    </MealContext.Provider>
  );
}

export function useMeal() {
  return useContext(MealContext);
}
