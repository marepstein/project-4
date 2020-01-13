import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SwapPage = (props) => {

  const [yourItems, setYourItems] = useState([])

  useEffect(() => {
    
  })

  return <div>
    {props.match.params.id}
  </div>

}

export default SwapPage