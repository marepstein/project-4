import React, { useState, useEffect } from 'react'
import HoveredSquare from './HoveredSquares'
import IndependentSquare from './IndependentSquare'


const Brands = () => {
 
  return <div className="section has-text-centered">
    <div className="container is-centered-mobile is-half-mobile">
      <h1 style={{ fontWeight: 900, fontSize: 100 }}>Brand Guide</h1>
      <div className="columns is-multiline">
        <HoveredSquare />
        <IndependentSquare />
      </div>
    </div>
  </div>
}

export default Brands