import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";


function Review(props) {
  console.log(props)
  // const handleDelete = async () => {
  //   const recordURL = `${baseURL}/${props.image.id}`;
  //   await axios.delete(recordURL, config);
  //   props.setToggleFetch((prev) => !prev);
  // };
  

  // const { name, varietal, image, price, description } = props.image.fields;

  return (
    <div>
      <h1></h1>
      {/* <h2>{name}</h2>
      <h2>{varietal}</h2>
      <h2>{image}</h2>
      <h2>{price}</h2>
      <h2>{ description}</h2>
      <Link to={`/edit/${props.image.id}`}>
        <button>Update</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>  */}
      </div>
  );
}

export default Review;