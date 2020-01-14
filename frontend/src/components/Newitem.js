import React, { useState, useCallback } from 'react'
import { render } from 'react-dom'
import useModal from 'react-hooks-use-modal'
import axios from 'axios'
import Auth from '../lib/auth'
import ItemForm from './ItemForm'


const NewItem = (props) => {

  const [data, setData] = useState({
    image: '',
    title: '',
    description: '',
    size: '',
    original_price: '',
    category: ['']
  })
	
  const [error, setErrors] = useState({})
	
  console.log(data)
	
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    // Keep all the previous errors, but remove the one for the field we just updated
    console.log(data)
    setErrors({ ...error, errors: '' })
  }
	
  function handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/items', data, { headers: { Authorization: `Bearer ${Auth.getToken()}` } })
      .then(() => {
        if (error.errors === '') {
          props.history.push(`/items/${data._id}`)
        }
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
        console.log(err.response.data.errors)
      })
  }


  return <section className="section">
    <div className="container">
      {/* The cheese form is a common form used for creating and updating cheeses */}
      <ItemForm
				handleChange={e => handleChange(e)}
				handleSubmit={e => handleSubmit(e)}
        errors={error}
        data={data}
      />
    </div>
  </section>




}

export default NewItem