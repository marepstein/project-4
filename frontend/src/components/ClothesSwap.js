import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LazyHero from 'react-lazy-hero'


const categories = ['All', 'Dresses', 'Knitwear', 'Jackets & Coats', 'Blouses & Shirts', 'Tops & T-shirts', 'Trousers', 'Jeans', 'Skirts', 'Jumpsuits & Playsuits', 'Sets & Suits', 'Footwear', 'Accessories', 'Jewellery', 'Bags']

const errorInitialState = {
  errors: ''
}

const ClothesSwap = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(errorInitialState)
  const [categorySelected, setCategory] = useState('All')

  useEffect(() => {
    axios.get('/api/items')
      .then(resp => setData(resp.data))
      .catch(err => setError({ errors: err.response.status }))
  }, [])

  const categoryFilter = (e) => {
    e.preventDefault()
    setCategory(e.target.value)

  }

  return (
    <div className='section'>
      <LazyHero imageSrc="https://www.atrafloor.com/app/uploads/2017/01/white-brick-effect-flooring-neutral.jpg" minHeight='40vh' parallaxOffset={100} overflow='hidden' opacity={0} transitionDuration={0} id='swap-splash'>
        <div>
          <div id="clothes-title" style={{ fontSize: 65, fontWeight: 800, color: '#FFF' }}>CLOTHES SWAP</div>
        </div>
      </LazyHero>
      <section>
        <form className='form'>
          <div className='field'>
            <div className='control filters'>
              <label className='label'>Pick a Category:</label>
              <div className='select is-small is-info' id='drop-down'>
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
          <div className='container'>
            <div className='columns is-mobile is-multiline'>
              {data.filter(elem => {
                if (categorySelected === 'All') {
                  return elem
                } return elem.category === categorySelected
              })
                .filter(elem => {
                  return !elem.is_swapped
                })
                .map((item, id) => {
                  return <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile' key={id}>
                    <div className='card clothes-card'>
                      <Link to={`/swap/${item.id}`}>
                        <div className='card-image'>
                          <figure className='image is-1by1'>
                            <img src={item.image} alt='Placeholder image' />
                          </figure>
                        </div>
                      </Link>
                      <div id='clothes-content'>
                        <p className='clothes-title is-size-6'>{item.title}</p>
                      </div>
                    </div>
                  </div>
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )




}

export default ClothesSwap