import React from 'react'
import { useParams } from "react-router-dom";

function Show(props) {
  const params = useParams()

  const wine = props.images.find((wines) => {
    return wines.name === params.name
    
  })
  console.log(wine)

  return (
    <div className="image">
      <img src={wine.image} alt={wine.name} />
      <h2>{wine.fields.name}</h2>
      <h2>{wine.fields.varietal}</h2>
      <h3>{wine.price}</h3>
      <button>
        <a href={wine.description} target="_blank">
          Read More
        </a>
      </button>
       </div>
  )
}
export default Show;
