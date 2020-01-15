import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import UserContext from './UserContext'
import NewItem from './Newitem'


const errorInitialState = {
  errors: ''
}

const Profile = () => {

  const [data, setData] = useState({})
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [itemModal, setItemModal] = useState(false)
  const [error, setError] = useState(errorInitialState)
	

  useEffect(() => {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        setData(res.data)
        setUserInfo(res.data)
      })
      .catch(error => console.log(error))
  }, [])

  // console.log(data.items)

  function handleDelete(e) {
		console.log(e.target.value)
    axios.delete(`/api/items/${e.target.value}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .catch((err) => setError( { errors: err.response.data } ))
  }
		

  function swapRequestersExist(elem) {
    return elem.length !== 0
  }
        

  // console.log(data)
  // console.log(userInfo)
	
  function toggleForm() {
    setItemModal(!itemModal)
  }



  return <div className="section">
    <div className="container" id="profile-header">
      <div className="title is-size-3-mobile" id="profile-title"> Welcome to Green Garms, {data.username}!</div>
      {/* <h2>{data.email}</h2> */}
      <div className="section" id="quicklink-sect">
        <div className="container" style={{ marginTop: 0 }}>
          <div className={itemModal === true ? 'modal is-active' : 'modal'}>
            <div className="modal-background" onClick={toggleForm}></div>
            <div className="modal-content">
              <NewItem
                toggleForm = {toggleForm}
              /> 
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={toggleForm}></button>
          </div>
          <button className="button" onClick={toggleForm} style={{ textTransform: 'uppercase' }}>Add Item</button>
          <Link className="button" to='/brands'>Brand Guide</Link>
          <Link className="button" to='/clothesswap'>Clothes Swap</Link>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container has-text-centered">
        <h2 className="header is-size-1 is-size-3-mobile" style={{ fontWeight: 700 }}>Your Items</h2>
      </div>
      <br />
      <div className="columns is-multiline">
        {data.username && data.items.filter(elem => {
          return !elem.is_swapped
        })
          .map((item, id) => {
            return (
              <div key={id} className="column is-one-quarter-desktop is-one-third-tablet is-three-quartes-mobile has-text-centered">
                <div className="card has-text-centered" id="item-card">
                  <p className="fav-title" style={{ padding: 10 }}>{item.title}</p>
                  {swapRequestersExist(item.swap_requesters) &&
                      <Link to={`/swaprequests/${item.id}/${item.swap_requesters.length}`} item={item}>
                        <button className="button is-small">Swap Requests Pending!</button>
                      </Link>}
                  <div className="card-image">
                    <figure className="image is-5by4 is-centered">
                      <img className="image" src={item.image} />
                    </figure>
                  </div>
                  <div className="card-content has-text-centered" style={{ padding: 0 }}>
                    <div className="card-footer has-text-centered">
                      <Link className="button" id="item-btn" to={'/clothesswap'}>View item</Link>
                      <button className="button" id="item-btn" value={item.id} onClick={e => handleDelete(e)}>Delete item</button>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
      </div>
    </div>
  </div>


}

export default Profile