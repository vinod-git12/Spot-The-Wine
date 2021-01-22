import axios from "axios";
import { Link }

function Review(props) {
  const { image } = props.image.fields;
  return (
    <div>
      <h3>{image}</h3>
     
    </div>
  );
}

export default Review;