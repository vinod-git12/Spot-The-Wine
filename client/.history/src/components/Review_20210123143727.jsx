import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Review(props) {
  const handleDelete = async () => {
    const recordURL = `${baseURL}/${props.date.id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch((prev) => !prev);
  };

  const { name, varietal, image, price, description } = props.date.fields;

  return (
    <div>
      <h2>{name}</h2>
      <h3

      
        <button onClick={handleDelete}>Delete Record</button> 
       
     </div>
  );
}

export default Review;