import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import '../src/style.scss'

// import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
<<<<<<< HEAD
import Brands from './components/Brands'
import HighStreet from './components/HighStreet'
import Independent from './components/Independent'
import Luxury from './components/Luxury'

const App = () => (
  <HashRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/brands" component={Brands} />
      <Route exact path="/brands/highstreet" component={HighStreet} />
      <Route exact path="/brands/luxury" component={Luxury} />
      <Route exact path="/brands/independent" component={Independent} />
=======
import Register from './components/Register'
import Login from './components/Login'
import ClothesSwap from './components/ClothesSwap'
import AboutCS from './components/AboutCS'
import SwapPage from './components/SwapPage'

// import SecureRoute from './components/SecureRoute'


const App = () => (
  <HashRouter>
    {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
      <Route path='/aboutcs' component={AboutCS} />
      <Route path='/swap/:id' component={SwapPage}/>
      <Route path='/clothesswap' component={ClothesSwap} />
>>>>>>> development
    </Switch>
  </HashRouter>

)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
	

