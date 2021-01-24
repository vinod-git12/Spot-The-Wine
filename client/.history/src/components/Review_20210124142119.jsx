import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";


function Review(props) {
  console.log(props)
  const params = useParams()
  const wine = props.images.find((wines) => {
    return wines.id === params.id
  })
  console.log(wine.id)
  
  // const handleDelete = async () => {
  //   const recordURL = `${baseURL}/${props.image.id}`;
  //   await axios.delete(recordURL, config);
  //   props.setToggleFetch((prev) => !prev);
  // };
  

  // const { name, varietal, image, price, description } = wine.fields;

  return (
    <div>
      {wine}
      <h1>error</h1>
      {/* <h2>{name}</h2>
      <h2>{varietal}</h2>
      <h2>{image}</h2>
      <h2>{price}</h2>
      <h2>{ description}</h2>
      <Link to={`/edit/${props.image.id}`}>
        <button>Update</button>
      </Link> */}
     
      </div>
  );
}

export default Review;