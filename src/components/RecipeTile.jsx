import { NavLink } from "react-router-dom";
const RecipeTile = ({ recipe }) => {
  return (
    <div className='col-12 col-md-6 py-3'>
      <NavLink to={`/recipes/${recipe.title}`}>
        <div
          style={{ backgroundImage: `url(${recipe.images[0][1]})` }}
          id={recipe.images[0][1]}
          className='index-image-container'
        ></div>
        <h3 className='text-uppercase'>{recipe.title}</h3>
      </NavLink>
    </div>
  );
};

export default RecipeTile;
