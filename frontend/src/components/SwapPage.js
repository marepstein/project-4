import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../lib/auth'

const SwapPage = (props) => {

  const [userProfile, setUserProfile] = useState([])
  const [yourItems, setYourItems] = useState([])
  const [likedItem, setLikedItem] = useState([])

  useEffect(() => {
    axios.get('/api/profile', {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(resp => setUserProfile(resp.data))
    getItem(props)
  }, [])

  console.log(userProfile)
  console.log(likedItem)

  function getItem(props) {
    const id = props.match.params.id
    axios.get(`/api/items/${id}`)
      .then(resp => setLikedItem(resp.data))
  }


  return <div>
    {props.match.params.id}
  </div>

}

export default SwapPage