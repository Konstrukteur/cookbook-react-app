import { useLocation, useParams } from "react-router-dom";
import RecipeTile from "./RecipeTile";

const Recipe = ({ recipes }) => {
  // const { search } = useLocation();
  // const match = search.match(/id=(.*)/);
  // const id = match?.[1];
  const { id } = useParams();

  return (
    <div className='row'>
      {recipes[id].title}
      hello
    </div>
  );
};

export default Recipe;
