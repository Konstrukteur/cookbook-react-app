import { useState, useEffect } from "react";
import RecipeTile from "./RecipeTile";
import Title from "./Title";

const Recipes = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  useEffect(() => {
    console.log(recipes);
    console.log(searchTerm);
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filtered);
    setFilteredRecipes([...filtered]);
  }, [searchTerm]);

  return (
    <>
      <Title searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className='row'>
        {filteredRecipes.map((recipe) => (
          <RecipeTile
            key={recipe.uniqueId}
            id={recipe.uniqueId}
            recipe={recipe}
          />
        ))}
      </div>
    </>
  );
};

export default Recipes;
