import { useState, useEffect } from "react";
import { useActionData } from "react-router-dom";
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
      <Title />
      <input
        type='text'
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
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
