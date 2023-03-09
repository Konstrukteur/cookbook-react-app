import RecipeTile from "./RecipeTile";

const Recipes = ({ recipes }) => {
  return (
    <div className='row'>
      {recipes.map((recipe) => (
        <RecipeTile
          key={recipe.uniqueId}
          recipe={recipe}
          id={recipe.uniqueId}
        />
      ))}
    </div>
  );
};

export default Recipes;
