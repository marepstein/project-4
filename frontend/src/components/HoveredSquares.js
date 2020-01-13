import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import posed from 'react-pose'
import styled from 'styled-components'


const Square = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
})

const StyledSquare = styled(Square)`
  width: 450px;
  height: 250px;
`

const HoveredSquare = () => {
  const [initialState, setInitialState] = useState({ 
    hovering: false 
  })

  return <div className="container">
    <div className="section">
      <StyledSquare className="box" id="inner-border"
        pose={initialState.hovering ? 'hovered' : 'idle'}
        onMouseEnter={() => setInitialState({ hovering: true })}
        onMouseLeave={() => setInitialState({ hovering: false })}
      ><Link to="brands/highstreet" style={{ color: '#FFF' }}>High Street</Link>
      </StyledSquare>
    </div>  
  </div>
}
export default HoveredSquare