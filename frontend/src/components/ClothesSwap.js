import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const categories = ['all', 'dresses', 'knitwear', 'jackets & coats', 'blouses & shirts', 'tops & t-shirts', 'trousers', 'jeans', 'skirts', 'jumpsuits & playsuits', 'sets & suits', 'footwear', 'accessories', 'jewellery', 'bags']

const errorInitialState = {
  errors: ''
}

const ClothesSwap = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(errorInitialState)
  const [categorySelected, setCategory] = useState('all')

  useEffect(() => {
    axios.get('/api/items')
      .then(resp => setData(resp.data))
      .catch(err => setError({ errors: err.response.status }))
  }, [])
  console.log(data)

  const categoryFilter = (e) => {
    e.preventDefault()
    setCategory(e.target.value)

  }

  return (
    <section>
      <form className='form'>
        <div className='field'>
          <div className='control filters'>
            <label className='label'>Pick a Category:</label>
            <div className='select'>
              <select onChange={(e) => categoryFilter(e)}>
                {categories.map((elem, i) => {
                  return <option key={i} value={elem}>{elem}</option>
                })}
              </select>
            </div>
          </div>
        </div>
      </form>
      <div>
        <div>
          {data.filter(elem => {
            if (categorySelected === 'all') {
              return elem
            } return elem.category === categorySelected
          })
            .map((item, id) => {
              return <div key={id}>
                <Link to={`/swap/${item.id}`}>
                  <img src={item.image} alt='Placeholder image' />
                </Link>
              </div>
            })}
        </div>
      </div>
    </section>
  )




}

export default ClothesSwap