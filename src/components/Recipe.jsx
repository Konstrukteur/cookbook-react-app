import { useParams } from "react-router-dom";

const Recipe = ({ recipes }) => {
  const { uniqueId } = useParams();
  const recipe = recipes.find((entry) => {
    return entry.uniqueId == uniqueId;
  });

  return (
    <main className='row container p-4'>
      <div className='row'>
        <div className='col'>
          <h2 className='text-uppercase'>
            Serves: {recipe.portions} | Prep Time: {recipe.prepTime} | Cook
            Time: {recipe.cookTime}
          </h2>
          <hr />
        </div>
      </div>
      <div className='row justify-content-center' id='image-container'>
        <div className='col-12 text-center'>
          <div className='row mt-2'>
            <div id='recipeAlbum' className='carousel slide'>
              <div className='carousel-indicators'>
                <button
                  type='button'
                  data-bs-target='#recipeAlbum'
                  data-bs-slide-to='0'
                  class='active'
                  aria-current='true'
                  aria-label='Slide 1'
                ></button>
                <button
                  type='button'
                  data-bs-target='#recipeAlbum'
                  data-bs-slide-to='1'
                  aria-label='Slide 2'
                ></button>
                <button
                  type='button'
                  data-bs-target='#recipeAlbum'
                  data-bs-slide-to='2'
                  aria-label='Slide 3'
                ></button>
              </div>
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div
                    id='puttanesca-image01'
                    className='d-block w-100 carousel-image-container'
                  ></div>
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>{recipe.title}</h5>
                    <p>Tomatoes, olives and anchovies is all it takes.</p>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div
                    id='puttanesca-image02'
                    className='d-block w-100 carousel-image-container'
                  ></div>
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>{recipe.title}</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className='carousel-item'>
                  <div
                    id='puttanesca-image03'
                    className='d-block w-100 carousel-image-container'
                  ></div>
                  <div className='carousel-caption d-none d-md-block'>
                    <h5>{recipe.title}</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target='#recipeAlbum'
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target='#recipeAlbum'
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 col-md-6 my-4'>
          <h3>Ingredients</h3>
          <hr />
          <table className='table table-sm table-hover'>
            <tbody>
              {recipe.ingredients.map((ingredient) => {
                return <tr>{ingredient}</tr>;
              })}
            </tbody>
          </table>
          <a href='javascript: alert(window.location.href)'>
            <i data-feather='share-2'></i>
          </a>
        </div>
        <div className='col-12 col-md-6 my-4'>
          <h3>Instructions</h3>
          <hr />
          <p>{recipe.instructions}</p>
          <p>{recipe.about}</p>
        </div>
      </div>
    </main>
  );
};

export default Recipe;
