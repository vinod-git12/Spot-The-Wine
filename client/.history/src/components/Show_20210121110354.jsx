import React from 'react'
import { useParams } from "react-router-dom";

function Show(props) {
  const params = useParams()

  const image = props.images.find((image) => {
    return image.name === params.name
  })

  return (
    <div className="">
      
    </div>
  )
}

export default Show
