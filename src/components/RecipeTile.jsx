import { NavLink } from "react-router-dom";
const RecipeTile = ({ recipe }) => {
  return (
    <div className='col-12 col-md-6 py-3'>
      <NavLink to={`/recipes/${recipe.uniqueId}`}>
        <div
          style={{ backgroundImage: `url(${recipe.images[0][1]})` }}
          id='homus-image1'
          className='index-image-container index-popover3'
          data-bs-toggle='popover'
          data-bs-html='true'
          data-bs-title='Lebanese Homus'
          data-bs-content='
          <div>
              <h3>Ingredients:</h3>
              <hr />
              <p>ounces cans chickpeas - 2-15 oz</p>
              <p>Garlic, crushed - 2 pieces</p>
              <p>Tahini paste - 1/4 cup</p>
              <p>Freshly squeezed lemon juice - 1/3 cup</p>
              <p>Extra virgin olive oil - 1/4 cup</p>
              <p>Paprika - 1/4 piece</p>
              <p>Salt - 1/4 spoon</p>
              <p>Cold water - 3 tbsp</p>
              <p>Pine nuts - 20g</p>
          </div>'
          data-bs-trigger='hover focus'
          data-bs-placement='top'
          data-bs-custom-class='index-popovers'
        ></div>
        <h3 className='text-uppercase'>{recipe.title}</h3>
      </NavLink>
    </div>
  );
};

export default RecipeTile;
