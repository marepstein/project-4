import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Luxury = () => {
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
	
  const luxuryBrands = initialData.filter(function(brand) {
    return brand.category === 2
  })
	
  console.log(luxuryBrands)
	
  function showRanking(elem) {
    return elem.ranking
  }

  function showOurRanking(elem) {
    return elem.our_ranking
  }

  return (
    <div className="container">
      <div className="section">
        <div className="columns is-multiline">
          {luxuryBrands.map((brand, i) => {
            return <div className="container" key={i} brand={brand}>
              <div className="title is-size-1">{brand.brand_name}</div>
              {showRanking(brand) && 
              <div className="subtitle" style={{ fontWeight: 800 }}>Ranking: {brand.ranking}
              </div>}
              {showOurRanking(brand) && 
              <div className="subtitle" style={{ fontWeight: 800 }}>Ranked by us: {brand.our_ranking}
              </div>}
              <div className="subtitle is-size-5">{brand.description}</div>
            </div>
          })} 
        </div>
      </div>
    </div>
  )
}

export default Luxury