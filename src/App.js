import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Recipes from "./components/Recipes";
import useContentful from "./components/useContentful";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then((entries) => {
      setRecipes(entries);
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      <main className='container p-4'>
        <Routes>
          <Route path='/' element={<Recipes recipes={recipes} />} />
          <Route path='/recipes' element={<Recipe getRecipes={getRecipes} />}>
            <Route path=':id' element={<Recipe getRecipes={getRecipes} />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
