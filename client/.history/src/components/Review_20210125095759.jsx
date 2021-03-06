import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useHistory,useParams } from "react-router-dom";
import { baseURL, config } from '../services';


function Review(props) {
  const [name, setName] = useState("")
  const [varietal, setVarietal] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")
  const history = useHistory()

  const params = useParams()
  const wine = props.images.find((wines) => {
    return wines.id === params.id
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const wine = {
      name,
      varietal,
      image,
      price,
      description,
    }
    
    await axios.p(baseURL, {fields: wine }, config)
    props.setToggle(!props.toggle)
    history.push('/')
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
    <h3 className="titleForm">Update </h3>
    <label htmlFor="name">Name: </label>
    <input 
      type="text"
      name="name"
      value={wine.id.name}
      onChange={(e) => setName(e.target.value) }
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


 