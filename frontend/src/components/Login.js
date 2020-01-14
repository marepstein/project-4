import React, { useState } from 'react'
import axios from 'axios'
import Auth from '../lib/auth'


const initialLoginState = {
  email: '',
  password: ''
}

const errorInitialState = {
  errors: ''
}

const Login = (props) => {

  const [form, updateForm] = useState(initialLoginState)
  const [error, setError] = useState(errorInitialState)

  function handleInput(e) {
    updateForm({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, errors: '' })
    console.log(form)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form) return
    axios.post('/api/login', form)
      .then(resp => {
        Auth.setToken(resp.data.token)
        console.log(resp.data.token)
      })
      .then(() => props.history.push('/clothesswap'))
      .catch((err) => setError({ errors: 'Email or Password Incorrect' }))
  }

  return (
    <section className="section">
      <div className="container">
        <div className="title">Login</div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                onChange={(e) => handleInput(e)}
                type="text"
                name="email"
                className="input"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password
            </label>
            <div className="control">
              <input
                onChange={(e) => handleInput(e)}
                type="text"
                name="password"
                className="input"
              />
            </div>
            {error.errors && <small className="help is-danger">
              {error.errors}
            </small>}
          </div>
          <button className="button is-success">
            Login
          </button>
        </form>
      </div>
    </section>
  )
}


export default Login
