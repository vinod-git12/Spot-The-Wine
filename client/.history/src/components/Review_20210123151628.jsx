import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Review(props) {
  const handleDelete = async () => {
    const recordURL = `${baseURL}/${props.image.id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch((prev) => !prev);
  };

  // const { name, varietal, image, price, description } = props.image.fields;

  return (
    <div>
      <h2>{name}</h2>
      <h2>{varietal}</h2>
      <h2>{image}</h2>
      <h2>{price}</h2>
      <h2>{ description}</h2>
      <Link to={`/edit/${props.images.id}`}>
        <button>Update</button>
      </Link>
      <button onClick={handleDelete}>Delete</button> 
      </div>
  );
}

export default Review;