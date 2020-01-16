import React, { useEffect, useState } from 'react'
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
    return brand.category === 1
  })
	
  console.log(highStreetBrands)

  function showRanking(elem) {
    return elem.ranking
  }

  function showOurRanking(elem) {
    return elem.our_ranking
  }
	
  return <div className="section">
    <div className="container has-text-centered" id="brand-pg">
      <div className="columns is-multiline">
        {highStreetBrands.map((brand, i) => {
          return <div className="container" key={i} brand={brand}>
            <div className="title is-size-1">{brand.brand_name}</div>
            {showRanking(brand) && 
              <div className="subtitle is-size-6" style={{ fontWeight: 800, color: '#000' }}>Ranking: {brand.ranking}
              </div>}
            {showOurRanking(brand) && 
             <div className="subtitle is-size-6" style={{ fontWeight: 800, color: '#000' }}>Ranked by us: {brand.our_ranking}
             </div>}
            <div className="brand-description has-text-centered is-size-6 is-size-7-mobile">{brand.description}</div>
          </div>
        })} 
      </div>
    </div>
  </div>
}

export default HighStreet
