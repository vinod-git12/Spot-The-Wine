import React from 'react'
import { useParams } from "react-router-dom";

function Show(props) {
  const params = useParams()

  const imageWine = props.images.find((image) => {
    return imageWine.name === params.name
  })

  return (
    <div className="image">
      <img src={imageWine.image} alt={imageWine.name} />
      <h2>{imageWine.name}</h2>
      <h2>{imageWine.varietal}</h2>
      <h3>{imageWine.price}</h3>
      <button>
        <a href={imageWine.description} target="_blank">
          Read More
        </a>
      </button>
       </div>
  )
}
export default Show;
