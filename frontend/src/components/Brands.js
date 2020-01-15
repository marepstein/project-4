import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HoveredSquare from './HoveredSquares'
import IndependentSquare from './IndependentSquare'
import LuxurySquare from './LuxurySquare'


const Brands = () => {
  return <div className="section has-text-centered" id="brands">
    <div className="container is-centered-mobile is-half-mobile">
      <h1 className="title is-size-1-mobile" style={{ fontWeight: 900, fontSize: 100 }}>Brand Guide</h1>
      <div className="section">
        <Link className="title is-size-3-mobile" style={{ fontSize: 180 }} to="brands/highstreet">High Street </Link>
				<br />
        <Link className="title is-size-3-mobile" style={{ fontSize: 180 }} to="brands/luxury">Luxury </Link>
				<br />
        <Link className="title is-size-3-mobile" style={{ fontSize: 180 }} to="brands/independent">Independent </Link>
				<br />
      </div>
    </div>
  </div>
}

export default Brands