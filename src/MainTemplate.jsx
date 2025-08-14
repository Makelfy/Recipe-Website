import { createContext, useState, useContext } from "react";

const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [selectedFood, setSelectedFood] = useState("");
  return (
    <FoodContext.Provider value={{ selectedFood, setSelectedFood }}>
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  return useContext(FoodContext);
}
