import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselButton from "./CarouselButton";
import CarouselSlide from "./CarouselSlide";

const Recipe = ({ getRecipes }) => {
  const title = useParams();
  const [recipe, setRecipe] = useState();

  const getData = async () => {
    try {
      const recipes = await getRecipes();
      const recipe = await recipes.find((entry) => {
        return entry.title == title.id;
      });
      console.log(recipe.images);
      setRecipe(recipe);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = () => {
    alert(window.location.href);
  };

  return (
    <>
      <div className='row'>
        <div className='col'>
          <h2 className='text-uppercase'>
            Serves: {recipe && recipe.portions} | Prep Time:{" "}
            {recipe && recipe.prepTime} | Cook Time: {recipe && recipe.cookTime}
          </h2>
          <hr />
        </div>
      </div>
      <div className='row justify-content-center' id='image-container'>
        <div className='col-12 text-center'>
          <div className='row mt-2'>
            <div id='recipeAlbum' className='carousel slide'>
              <div className='carousel-indicators'>
                {recipe &&
                  recipe.images.map((image, index) => {
                    <CarouselButton image={image} index={index} />;
                  })}
              </div>
              <div className='carousel-inner'>
                {recipe &&
                  recipe.images.map((image, index) => {
                    // <CarouselSlide
                    //   image={image}
                    //   index={index}
                    //   recipe={recipe}
                    // />;
                    // return (
                    //   <div
                    //     className={`carousel-item ${
                    //       index == 0 ? "active" : ""
                    //     }`}
                    //     key={image[1]}
                    //   >
                    //     <div
                    //       id={`image${index}`}
                    //       style={{ backgroundImage: `url(${image[1]})` }}
                    //       className='d-block w-100 carousel-image-container'
                    //     ></div>
                    //     <div className='carousel-caption d-none d-md-block'>
                    //       <h5>{recipe.title}</h5>
                    //       <p>Tomatoes, olives and anchovies is all it takes.</p>
                    //     </div>
                    //   </div>
                    // );
                    return index == 0 ? (
                      <div className='carousel-item active' key={image[1]}>
                        <div
                          id={`image${index}`}
                          style={{ backgroundImage: `url(${image[1]})` }}
                          className='d-block w-100 carousel-image-container'
                        ></div>
                        <div className='carousel-caption d-none d-md-block'>
                          <h5>{recipe.title}</h5>
                          <p>Tomatoes, olives and anchovies is all it takes.</p>
                        </div>
                      </div>
                    ) : (
                      <div className='carousel-item' key={image[1]}>
                        <div
                          id={`image${index}`}
                          style={{ backgroundImage: `url(${image[1]})` }}
                          className='d-block w-100 carousel-image-container'
                        ></div>
                        <div className='carousel-caption d-none d-md-block'>
                          <h5>{recipe.title}</h5>
                          <p>Tomatoes, olives and anchovies is all it takes.</p>
                        </div>
                      </div>
                    );
                  })}
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
              {recipe &&
                recipe.ingredients.map((ingredient) => {
                  return (
                    <tr key={ingredient}>
                      <td>{ingredient}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button data-feather='share-2' onClick={handleClick}>
            Share
          </button>
        </div>
        <div className='col-12 col-md-6 my-4'>
          <h3>Instructions</h3>
          <hr />
          <p>{recipe && recipe.instructions}</p>
          <p>{recipe && recipe.about}</p>
        </div>
      </div>
    </>
  );
};

export default Recipe;
