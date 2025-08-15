import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [selectedFood, setSelectedFood] = useState("");
  const [selectedFoodCard, setSelectedFoodCard] = useState("");

  return (
    <AppContext.Provider
      value={{
        selectedFood,
        setSelectedFood,
        selectedFoodCard,
        setSelectedFoodCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useFood() {
  const { selectedFood, setSelectedFood } = useContext(AppContext);
  return { selectedFood, setSelectedFood };
}

export function useFoodCard() {
  const { selectedFoodCard, setSelectedFoodCard } = useContext(AppContext);
  return { selectedFoodCard, setSelectedFoodCard };
}
