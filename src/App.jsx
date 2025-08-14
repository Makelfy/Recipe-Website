import { FoodProvider } from "./MainTemplate.jsx";
import RecipeCard from "./RecipeCard/RecipeCard.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import FoodsPage from "./FoodsPage/FoodsPage.jsx";

function App() {
  return (
    <FoodProvider>
      <div className="main-page">
        <Sidebar />

        <div className="recipe-cards">
          <FoodsPage />
        </div>
      </div>
    </FoodProvider>
  );
}

export default App;
