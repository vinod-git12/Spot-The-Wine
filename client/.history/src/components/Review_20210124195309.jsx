import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


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
      description,
    };
    await axios.put(baseURL, {wine.id}, config);
  };
  
  
  // const { name, varietal, image, price, description } = wine.fields;

  return (
    <form className="form" onSubmit={handleSubmit}>
    <h3 className="titleForm">Add Your Favorite Wine</h3>
    <label htmlFor="name">Name: </label>
    <input 
      type="text"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <label htmlFor="varietal">Varietal: </label>
    <input 
      type="text"
      name="varietal"
      value={varietal}
      onChange={(e) => setVarietal(e.target.value)}
    />
    <label htmlFor="image">Image: </label>
    <input 
      type="text"
      name="image"
      value={image}
      onChange={(e) => setImage(e.target.value)}
    />
    <label htmlFor="price">Price: </label>
    <input 
      type="number"
      name="price"
      value={price}
      onChange={(e) => setPrice(e.target.valueAsNumber)}
    />
    <label htmlFor="description">Description: </label>
    <input 
      type="text"
      name="description"
      value={description}
      onChange={(e) => setDescription (e.target.value)}
    />
    <button type="submit">Submit</button>
  </form>
  );
}

export default Review;


 // <div>
    //   {wine && 
    //     <div>
    //     <h1>{wine.fields.name }</h1>
    //     <h2>{wine.fields.varietal}</h2>
    //     <h2>{wine.fields.image}</h2>
    //     <h2>{wine.fields.price}</h2>
    //     <h2>{wine.fields.description}</h2>
    //   <Link to={`/edit/${wine.id}`}>
    //     <button>Update</button>
    //   </Link>
    //     </div>
    // } 
    //   </div>