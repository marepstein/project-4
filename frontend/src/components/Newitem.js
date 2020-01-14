import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import useModal from 'react-hooks-use-modal'
import axios from 'axios'
import Auth from '../lib/auth'


const NewItem = (props) => {

  const [data, setData] = useState({
    image: '',
    title: '',
    description: '',
    size: '',
    original_price: '',
    category: ['']
  })
	
  const [errors, setErrors] = useState({})
	

  function postIt() {
    axios.post('/api/items', data,
      {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        props.history.push(`/items/${res.data._id}`)
      })
      .catch(err => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
  }


  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    // Keep all the previous errors, but remove the one for the field we just updated
    console.log(data)
    setErrors({})
  }
	
  function handleSubmit() {
    postIt()
  }

  return <section className="section">
    <div className="container">
      {/* The cheese form is a common form used for creating and updating cheeses */}
      <ItemForm
        handleSubmit={handleSubmit}
        handleChange={e => handleChange(e)}
        errors={errors}
        data={data}
      />
    </div>
  </section>




}

export default NewItem