import React from 'react'
import { useParams } from "react-router-dom";

function Show(props) {
  const params = useParams()

  const wine = props.images.find((wines) => {
    return wines.id === params.id
    
  })
  console.log(wine)

  return (
    <div className="image">
      <img src={wine.fields.image} alt={wine.name} />
      <h2>{wine.fields.name}</h2>
      <h2>{wine.fields.varietal}</h2>
      <h3>{wine.fields.price}</h3>
      
      <a href={wine.fields.description} target="_blank">
      <button>
          Read More
          </button>
        </a>
      
       </div>
  )
}
export default Show;
