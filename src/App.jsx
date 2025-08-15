import { AppProvider, useFoodCard } from "./MainTemplate.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import FoodsPage from "./FoodsPage/FoodsPage.jsx";
import RecipeCardPage from "./RecipeCardPage/RecipeCardPage.jsx";

function App() {
  return (
    <AppProvider>
      <div className="main-page">
        <Sidebar />
        <MainContent />
      </div>
    </AppProvider>
  );
}

function MainContent() {
  const { selectedFoodCard } = useFoodCard();
  return selectedFoodCard === "" ? <FoodsPage /> : <RecipeCardPage />;
}

export default App;
