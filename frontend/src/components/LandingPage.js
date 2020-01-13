import React from 'react'
import LazyHero from 'react-lazy-hero'


const LandingPage = () => {

  return <div>
    <div className="section" id="lazyhero">
      <LazyHero imageSrc="https://media.giphy.com/media/xTiQyk1EHBkV8t8WlO/giphy.gif" minHeight='100vh' parallaxOffset={300} overflow='hidden' opacity={0} id='lazy-home' transitionDuration={0}>
        <div className="section is-centered">
          <div className="title" style={{ fontSize: 65, fontWeight: 800 }}>Green Garms</div>
          <div className="title" id="main-subtitle" style={{ fontSize: 30, fontWeight: 400 }}>The Guide to Sustainable Fashion</div>
        </div>
      </LazyHero>
    </div>
    <div className="section is full-height" style={{ marginTop: 50 }}>
      <div className="container has-text-centered">
        <div className="title" id="sustainable-title" style={{ fontSize: 50 }}>Why be sustainable?</div>
        <div className="fact">
          <div className="columns is-multiline">
            <div className="column" style={{ marginTop: 100, fontSize: 25 }}>
              <h1>The apparel and footwear industries account for a combined estimate of 8% of the world’s greenhouse gas emissions, and fashion is the third highest-polluting industry in the world.</h1>
              <div className="section">
                <h1>Only 15% of our clothing is recycled or donated.</h1>
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
            <div className="column" style={{ marginTop: 50, fontSize: 25 }}>
              <h1> It’s estimated that less than 1 percent of the material used to produce clothing is recycled into something more. That’s about a loss of 100 billion USD worth of materials every year.</h1>
              <div className="section">
                <h1>70million trees are cut down each year to make our clothes.</h1>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  </div>
	
	
	
  // <div className="section" style={{ height: 2000 }}>
  //   <div className="section" id="landing-top" style={{ height: '100vh' }}>
  //     <div className="container has-text-centered" id="landing-bg">
  //       <div className="title">
  //         <h1>The Guide to Sustainable Fashion</h1>
  //       </div>
  //     </div>
  //     <div className="section" style={{ height: '100vh' }}>
  //       <div className="container" style={{ height: '100vh' }}>
        
  //       </div>

  //     </div>

  //   </div>
  // </div>

}

export default LandingPage