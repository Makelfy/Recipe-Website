import { MealProvider } from "./MainTemplate.jsx";
import RecipeCard from "./RecipeCard/RecipeCard.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import MealsPage from "./MealsPage/MealsPage.jsx";

function App() {
  return (
    <MealProvider>
      <div className="main-page">
        <Sidebar />

        <div className="recipe-cards">
          <MealsPage />
        </div>
      </div>
    </MealProvider>
  );
}

export default App;
