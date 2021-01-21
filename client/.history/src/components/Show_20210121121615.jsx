import React from 'react'
import { useParams } from "react-router-dom";

function Show(props) {
  const params = useParams()

  const image = props.images.find((image1) => {
    return image.name === params.name
  })

  return (
    <div className="image">
      <img src={image1.image} alt={image1.name} />
      <h2>{image.name}</h2>
      <h2>{image.varietal}</h2>
      <h3>{image.price}</h3>
      <button>
        <a href={image.description} target="_blank">
          Read More
        </a>
      </button>
       </div>
  )
}
export default Show;
