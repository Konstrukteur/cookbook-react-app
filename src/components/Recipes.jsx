import RecipeTile from "./RecipeTile";

const Recipes = ({ recipes }) => {
  return (
    <div className='row'>
      {recipes.map((recipe) => (
        <RecipeTile
          key={recipe.uniqueId}
          id={recipe.uniqueId}
          recipe={recipe}
        />
      ))}
    </div>
  );
};

export default Recipes;
