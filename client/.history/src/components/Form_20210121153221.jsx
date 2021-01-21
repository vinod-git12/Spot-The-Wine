import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../services';

function Form() {
  const [name, setName] = useState("")
  const [varietal, setVarietal] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const wine = {
      name,
      varietal,
      image,
      price,
      description,
    }
    await axios.post(baseURL, wine)
    props.setToggle(!props.toggle)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Your Favorite Wine</h3>
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
      <label htmlFor="name">Name: </label>
      <input 
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </form>
       
  
  )
}

export default Form;
