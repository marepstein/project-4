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
    category: ''
  })
	
  const [error, setErrors] = useState({})
	

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
    setErrors({ ...error, errors: '' })
  }

  // function handleChange2(e) {
  //   // const options = data.category
  //   setData({ ...data, category: data.category.concat(e.target.value).join('') })
  //   console.log(data)
  //   console.log(data.category)
  //   setErrors({ ...error, errors: '' })
  // }
	
  function handleSubmit(e) {
    console.log('data', data)
    e.preventDefault()
    axios.post('/api/items', data, { 
      headers: { Authorization: `Bearer ${Auth.getToken()}` } 
    })
      .then(props.history.push('/profile'))
      .catch((err) => {
        setErrors(err.response.data)
        console.log(err.response.data.errors)
      })
  }


  return <section className="section">
    <div className="container">
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