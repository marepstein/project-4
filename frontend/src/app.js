import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'
import '../src/style.scss'

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'


const App = () => (

  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </BrowserRouter>

)

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
	

