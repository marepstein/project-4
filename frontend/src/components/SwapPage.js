import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import Fade from 'react-reveal/Fade'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const errorInitialState = {
  errors: ''
}

const SwapPage = (props) => {

  const [yourItems, setYourItems] = useState([])
  const [likedItem, setLikedItem] = useState([])
  const [error, setError] = useState(errorInitialState)

  useEffect(() => {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => setYourItems(resp.data.items))
    getItem(props)
  }, [])

  function getItem(props) {
    const id = props.match.params.id
    axios.get(`/api/items/${id}`)
      .then(resp => setLikedItem(resp.data))
  }

  function handleClick(e) {
    e.preventDefault()
    if (window.confirm(`Request to swap ${e.target.name}?`)) {
      axios.post(`/api/items/swap/${likedItem.id}/${e.target.value}/`, {}, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
        .then(() => props.history.push('/clothesswap'))
        .catch((err) => setError({ errors: err.response.data }))
    }
  }

  function noItemsToSwap() {
    if (yourItems.filter(elem => {
      return !elem.is_swapped
    }).length === 0) {
      return <Link to={'/profile'}>You have nothing to swap - Click to add items!</Link>
    }
  }

  return <section id='swap-page'>
    <div className="section" id='their-item'>
      <div className='has-text-centered'>
        <div className='columns swap-columns'>
          <div className='column' id='left-column'>
            <div id='item-title'>{likedItem.title}</div>
            <img src={likedItem.image}></img>
            <div id='item-details'>
              <p id='price'>Original Price: {likedItem.original_price}</p>
              <p id='item-description'>{likedItem.description}</p>
            </div>
          </div>
          <div className='column' id='right-column'>
            <Fade right>
              <div className='title' id='swap-title'>What would you like to swap?</div>
              <Link activeClass="active" className="test1" spy={true} smooth={true} onClick={() => scroll.scrollTo(800)} duration={500} >
                <button id='pick-item' className='button'>PICK AN ITEM</button>
              </Link>
            </Fade>
          </div>
        </div>
      </div>

    </div>
    <div className="section" id='your-items'>
      <div className='title'>YOUR ITEMS:</div>
      <div className='container has-text-centered'>
        <div className='columns is-mobile is-multiline'>
          {noItemsToSwap()}
          {yourItems.filter(elem => {
            return !elem.is_swapped
          })
            .map((elem, i) => {
              return <div className='column is-one-quarter-desktop is-one-third-tablet is-half-mobile' key={i}>
                <div className='card'>
                  <div className='card-image'>
                    <figure className='image is-1by1'>
                      <img src={elem.image}></img>
                    </figure>
                  </div>
                  <button className='button' id='swap-button' name={elem.title} value={elem.id} onClick={e => handleClick(e)}>SWAP ITEM</button>
                </div>
              </div>
            })}
        </div>
      </div>
    </div>
  </section>

}

export default SwapPage