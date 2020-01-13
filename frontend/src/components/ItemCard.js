import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({ item }) => (
  <div className="tile">
    {item.title}
  </div>
)

export default ItemCard