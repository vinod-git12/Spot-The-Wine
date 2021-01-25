import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";


function Review(props) {
  const [name, setName] = useState("");
  const [varietal, setVarietal] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("")

  const params = useParams()
  const wine = props.images.find((wines) => {
    return wines.id === params.id
  })
  console.log(wine)
  
  // const handleDelete = async () => {
  //   const recordURL = `${baseURL}/${props.image.id}`;
  //   await axios.delete(recordURL, config);
  //   props.setToggleFetch((prev) => !prev);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      varietal,
      image,
      price,
      descripto
    }
    }
  
  await axios.put(baseURL, { fields }, config);
  // const { name, varietal, image, price, description } = wine.fields;

  return (
    <div>
      {wine && 
        <div>
        <h1>{wine.fields.name }</h1>
      {/* <h2>{name}</h2> */}
      <h2>{wine.fields.varietal}</h2>
      <h2>{image}</h2>
      <h2>{price}</h2>
      <h2>{ description}</h2>
      <Link to={`/edit/${props.image.id}`}>
        <button>Update</button>
      </Link>
        </div>
    } 
      </div>
  );
}

export default Review;