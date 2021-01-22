import axios from "axios";
import { Link } from "react-router-dom";
import { bas }

function Review(props) {
  const { image } = props.image.fields;
  return (
    <div>
      <h3>{image}</h3>
     
    </div>
  );
}

export default Review;