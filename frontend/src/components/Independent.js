import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Independent = () => {
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
	
  const independentBrands = initialData.filter(function(brand) {
    return brand.category === 3
  })
	
  console.log(independentBrands)

  function showRanking(elem) {
    return elem.ranking
  }

  function showOurRanking(elem) {
    return elem.our_ranking
  }

  return <div className="section">
    <div className="container has-text-centered" id="brand-pg">
      <div className="columns is-multiline">
        {independentBrands.map((brand, i) => {
          return <div className="container" key={i} brand={brand}>
            <div className="title is-size-1">{brand.brand_name}</div>
            {showRanking(brand) && 
              <div className="subtitle is-size-6" style={{ fontWeight: 800, color: '#000' }}>Ranking: {brand.ranking}
              </div>}
            {showOurRanking(brand) && 
              <div className="subtitle is-size-6" style={{ fontWeight: 800, color: '#000' }}>Ranked by us: {brand.our_ranking}
              </div>}
            <div className="brand-description has-text-centered is-size-6 is-size-7-mobile">{brand.description}</div>
						<Link to={brand.website}>{brand.website}</Link>
          </div>
        })} 
      </div>
    </div>
  </div>
}

export default Independent