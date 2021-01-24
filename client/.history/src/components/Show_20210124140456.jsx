import React from 'react'
import { useHistory, useParams } from "react-router-dom";
import Review from "./Review";
import { baseURL, config } from "../services";
import axios from "axios";

function Show(props) {
  const params = useParams()
  const history = useHistory()

  const wine = props.images.find((wines) => {
    return wines.id === params.id
    
  })
  console.log(wine)

  const handleDelete = async () => {
    const recordURL = `${baseURL}/${wine.id}`;
    await axios.delete(recordURL, config);
    props.setToggle((prev) => !prev);
    history.push('/')
  };

  if (!wine) {
    return <p> Loading ...</p>;
  } else {
    return (
      <div className="showImage">
        <img src={wine.fields.image} alt={wine.name} height="350px" width="260px"/>
        <div className="showInfo"  >
        <h2>Name: {wine.fields.name}</h2>
        <h2>Varietal: {wine.fields.varietal}</h2>
        <h2>Price: ${wine.fields.price}</h2>
      
        <a href={wine.fields.description} target="_blank">
          <button className="showInfoButton">
            Read More
          </button>
          </a>
          <button onClick={handleDelete}>
            Delete
          </button>
          
        </div>
      </div>
    )
  }
}
export default Show;
