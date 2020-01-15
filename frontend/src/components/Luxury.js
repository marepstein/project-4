import React, { useEffect, useState, Fragment } from 'react'
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

  const styles = {
    block: {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '30%', 
      height: '30%', 
      background: '#000'
    }, 
    title: {
      textAlign: 'center',
      fontSize: 100, 
      color: '#fff'
    }
  }


  return <div className="section has-text-centered">
		  <div className="container" id="brand-pg">
      <div className="columns is-multiline">
        {/* <Fragment> */}
        {luxuryBrands.map((brand, i) => {
          return <div className="container" key={i} brand={brand}>
            {/* <Fade top>
									<> */}
            <div className="title is-size-1">{brand.brand_name}</div>
            <div className="column">
            </div>
              
            {showRanking(brand) && 
              <div className="subtitle is-size-6" style={{ fontWeight: 800, color: '#000' }}>Ranking: {brand.ranking}
              </div>}
            {showOurRanking(brand) && 
              <div className="subtitle is-size-6" style={{ fontWeight: 800, color: '#000' }}>Ranked by us: {brand.our_ranking}
              </div>}
            <div className="column">
              <div className="brand-description has-text-centered is-size-6 is-size-7-mobile">{brand.description}</div>
              {/* </>
                </Fade> */}
            </div>
          </div>
        })} 
        {/* </Fragment> */}
      </div>
    </div>
  </div>
}

export default Luxury