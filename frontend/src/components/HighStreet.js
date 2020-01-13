import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HighStreet = () => {
  const [initialData, setInitialData] = useState([])

  useEffect(() => {
    axios
      .get('/api/brands')
      .then(res => {
        setInitialData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  console.log(initialData)
	
  const highStreetBrands = initialData.filter(function(brand) {
    return brand.category === 2
  })
	
  console.log(highStreetBrands)

  return (
    <div className="container">
      <div className="section">
        <div className="columns is-multiline">
          {highStreetBrands.map((brand, i) => {
            return <div className="box" key={i} brand={brand}>{brand.brand_name}</div>
          })} 
        </div>
      </div>
    </div>
  )
}

export default HighStreet
