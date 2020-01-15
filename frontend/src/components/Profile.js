import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'
import UserContext from './UserContext'
import NewItem from './Newitem'

const Profile = () => {

  const [data, setData] = useState({})
  const { userInfo, setUserInfo } = useContext(UserContext)
  const [itemModal, setItemModal] = useState(false)
	

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


  function swapRequestersExist(elem) {
    return elem.length !== 0
  }
        
	
  console.log(data)
  console.log(userInfo)
	
  function toggleForm() {
    setItemModal(!itemModal)
  }

  return <div className="section">
    <div className="container">
      <h1> Welcome to Green Garms, {data.username}!</h1>
      <h2>{data.email}</h2>
      <div className="section">
        <div className="container">
          <h3>Quicklinks</h3>
          <div className={itemModal === true ? 'modal is-active' : 'modal'}>
            <div className="modal-background" onClick={toggleForm}></div>
            <div className="modal-content">
              <NewItem
                toggleForm = {toggleForm}
              /> 
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={toggleForm}></button>
          </div>
        
          <button className="tag is-info is-light" onClick={toggleForm}>Add Item</button>
          <Link className="tag is-info is-light" to='/brands'>Brand Guide</Link>
          <Link className="tag is-info is-light" to='/clothesswap'>Clothes Swap</Link>
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="titlecontain">
          <h2 className="headers">Your Items</h2>
        </div>
        <div className="columns is-multiline">
          {data.username && data.items.filter(elem => {
            return !elem.is_swapped
          })
            .map((item, id) => {
              return (
                <div key={id} className="column is-one-quarter-desktop is-one-third-tablet is-three-quartes-mobile">
                  <div className="card">
                    <p className="fav-title">{item.title}</p>
                    {swapRequestersExist(item.swap_requesters) &&
                      <Link to={`/swaprequests/${item.id}/${item.swap_requesters.length}`} item={item}>
                        <button className="button is-small">Swap Requests Pending!</button>
                      </Link>}
                    <div className="card-image">
                      <figure className="image is-5by4 is-centered">
                        <img className="image" src={item.image} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="card-footer">
                        <br />
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  </div>

}

export default Profile