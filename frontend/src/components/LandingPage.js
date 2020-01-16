import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LazyHero from 'react-lazy-hero'
import Fade from 'react-reveal/Fade'

  
const LandingPage = () => {

  return <div>
    <div className="section" id="lazyhero">
      <LazyHero imageSrc="https://media.giphy.com/media/xTiQyk1EHBkV8t8WlO/giphy.gif" minHeight='100vh' parallaxOffset={300} overflow='hidden' opacity={0} id='lazy-home' transitionDuration={0}>
        <div className="section is-centered">
          <div className="title is-size-3-mobile" style={{ fontSize: 65, fontWeight: 800 }}>Green Garms</div>
          <div className="title is-size-5-mobile" id="main-subtitle" style={{ fontSize: 30, fontWeight: 400 }}>The Guide to Sustainable Fashion</div>
        </div>
      </LazyHero>
    </div>
    <div className="section is-full-height" id="section-two" style={{ marginTop: 50 }}>
      <div className="container has-text-centered">
        <div className="title is-size-4-mobile" id="sustainable-title" style={{ fontSize: 60 }}>Why be sustainable?</div>
        <div className="fact">
          <div className="columns is-multiline">
            <div className="column" style={{ marginTop: 120 }}>
              <Fade left>
                <div>The apparel and footwear industries account for a combined estimate of 8% of the world’s greenhouse gas emissions, and fashion is the third highest-polluting industry in the world.</div>
              </Fade>
              <div className="section">
                <Fade left>
                  <div>Only 15% of our clothing is recycled or donated.</div>
                </Fade>
              </div>
            </div>
            <div className="column">
              <div className="gif1"> <img src="https://media.giphy.com/media/xTiQyI3vaLo0lLxu12/giphy.gif" />
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column">
              <div className="gif1"> <img src="https://media.giphy.com/media/xTiQyuOeUtdSOkRpOE/giphy.gif" />
              </div>
            </div>
            <div className="column" style={{ marginTop: 120 }}>
              <Fade left>
                <div> It’s estimated that less than 1 percent of the material used to produce clothing is recycled into something more. That’s about a loss of 100 billion USD worth of materials every year.</div>
              </Fade>
						  <div className="section">
                <Fade left>
                  <div>70million trees are cut down each year to make our clothes.</div>
                </Fade>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
    <div className="section is full-height" id="section-three" style={{ marginTop: 10 }}>
      <div className="container has-text-centered">
        <div className="title" style={{ fontSize: 50 }}>How we can help?</div>
        <marquee scrollamount="10"
          direction="left"
          behavior="scroll"><h2 style={{ fontWeight: 600 }}> Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms | Green Garms </h2></marquee>
        <div className="section">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              <div className="column is-full-mobile" id="brand-column">
                <Link to='/brands' className="box">
                  <div className="title is-size-4-mobile" id="box-text">Brand guide:</div>
                  <h2 className="is-size-7-mobile" id="box-text">Helping you shop sustainably</h2>
                </Link>
                <p className="box-text">Our top ranked sustainable brands across <em><strong>three categories</strong></em>. Choosing brands responsibly can contribute to a greener overall fashion future. </p>
              </div>
              <div className="column is-full-mobile" id="garm-column">
                <Link to='/register' className="box">
                  <div className="title  is-black is-size-5-mobile" id="box-text">Clothes Swap:</div>
                  <h2 className="is-size-7-mobile" id="box-text">A Garms for Garms Society</h2>
                </Link>
                <p className="box-text"> - Register -
                  <br /> 
									
								- Upload items -
                  <br /> 
								
								- Browse and select items -
                  <br /> 
								- Choose your item to swap -
                  <br />  
								
                  <Link className="reg-link" to='/register'> -	Get swapping - </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
			
      

}

export default LandingPage