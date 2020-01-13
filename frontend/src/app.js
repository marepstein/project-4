import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import '../src/style.scss'

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
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
    </Switch>
  </HashRouter>

)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
	

