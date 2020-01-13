import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import '../src/style.scss'

// import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
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
    </Switch>
  </HashRouter>

)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
	

