import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Review(props) {
  const handleDelete = async () => {
    const recordURL = `${baseURL}/${props.date.id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch((prev) => !prev);
  };

  const {name, varietal, }

  return (
    <div>
      <Link to="/delete">
        <button onClick={handleDelete}>Delete Record</button> 
        </Link>
     </div>
  );
}

export default Review;