import RecipeCard from "./RecipeCard/RecipeCard.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
function App() {
  return (
    <div className="main-page">
      <Sidebar />
      <div className="recipe-cards">
        <RecipeCard title="Pasta with Ground Beef" minute={25} type="Meal" />
        <RecipeCard title="Pasta with Ground Beef" minute={25} type="Meal" />
      </div>
    </div>
  );
}

export default App;
