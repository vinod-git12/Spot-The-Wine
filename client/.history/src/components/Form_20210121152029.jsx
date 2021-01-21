import React from 'react'
import { useState } from 'react';
import axios from 'axios';

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
      decsription,
    }
    await axios.post()
  }
  return (
    <div>
      
    </div>
  )
}

export default Form;
