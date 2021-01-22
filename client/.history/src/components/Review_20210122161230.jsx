import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Review(props) {
  const handleDelete = async () => {
    const recordURL = `${baseURL}/${props.date.id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch()
  }
  return (
    <div>
      <h3>{image}</h3>
     
    </div>
  );
}

export default Review;