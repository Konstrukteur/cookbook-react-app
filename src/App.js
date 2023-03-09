import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import * as contentful from "contentful";
import Recipes from "./components/Recipes";
import useContentful from "./components/useContentful";
import Header from "./components/Header";
import Title from "./components/Title";
// import Recipes from "./components/Recipes";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then((entries) => {
      console.log(entries);
      setRecipes(entries);
    });
  }, []);

  return (
    <div className='App'>
      <Header />
      <main className='container p-4'>
        <Title />
        <Routes>
          <Route path='/' element={<Recipes recipes={recipes} />} />
          <Route path='/recipes' element={<Recipe recipes={recipes} />}>
            <Route path=':uniqueId' element={<Recipe recipes={recipes} />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

// /recipes/3sTZhEMGs5pSJlyym0mxU3
