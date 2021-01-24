import React from 'react'
import { useParams } from "react-router-dom";

function Show(props) {
  const params = useParams()

  const wine = props.images.find((wines) => {
    return wines.id === params.id
    
  })
  console.log(wine)

  if (!wine) {
    return <p> Loading ...</p>;
  } else {
    return (
      <div className="showImage">
        <img src={wine.fields.image} alt={wine.name} height="350px" width="270px"/>
        <div className="showInfo"  >
        <h2>Name: {wine.fields.name}</h2>
        <h2>Varietal: {wine.fields.varietal}</h2>
        <h2>Price: ${wine.fields.price}</h2>
      
        <a href={wine.fields.description} target="_blank">
          <button className="showInfoButton">
            Read More
          </button>
        </a>
        </div>
      </div>
    )
  }
}
export default Show;
