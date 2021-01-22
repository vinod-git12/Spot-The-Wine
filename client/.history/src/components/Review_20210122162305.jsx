import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Review(props) {
  const handleDelete = async () => {
    const recordURL = `${baseURL}/${props.date.id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch((prev) => !prev);
  };

  return (
    <div>
      <Link to=
     <button onClick={handleDelete}>Delete Record</button> 
     </div>
  );
}

export default Review;