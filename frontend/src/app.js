import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Auth from './lib/auth'

import 'bulma'
import '../src/style.scss'

// import UserContext from './components/UserContext'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Brands from './components/Brands'
import HighStreet from './components/HighStreet'
import Independent from './components/Independent'
import Luxury from './components/Luxury'
import Register from './components/Register'
import Profile from './components/Profile'
// import EditProfile from './components/EditProfile'
import Login from './components/Login'
import ClothesSwap from './components/ClothesSwap'
import AboutCS from './components/AboutCS'
import SwapPage from './components/SwapPage'
import UserContext from './components/UserContext'
import ScrollToTop from './components/ScrollToTop'
import SwapRequests from './components/SwapRequests'


const App = (props) => {

  const [userInfo, setUserInfo] = useState(null)
  const sharedInfo = useMemo(() => ({ userInfo, setUserInfo }), [userInfo, setUserInfo])

  useEffect(() => {
    console.log('running')
    // console.log(Auth.getToken())
    if (Auth.isAuthorized()) {
      console.log('setting user')
      axios.get('/api/profile', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
        .then(response => {
          setUserInfo(response.data.user)
          // console.log(response.data)
        })
        .catch(error => {
          console.log(error)
          setUserInfo(null)
          Auth.logout()
          props.history.push('/login')
        })
    } else return
  }, [])

  console.log(sharedInfo)

  return <HashRouter>
    <UserContext.Provider
      value={sharedInfo}>
      <Navbar />
      <Switch>
        <ScrollToTop >
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/brands" component={Brands} />
          <Route exact path="/brands/highstreet" component={HighStreet} />
          <Route exact path="/brands/luxury" component={Luxury} />
          <Route exact path="/brands/independent" component={Independent} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/aboutcs' component={AboutCS} />
          <Route path='/swap/:id' component={SwapPage} />
          <Route path='/clothesswap' component={ClothesSwap} />
          <Route path='/swaprequests/:id' component={SwapRequests} />
          <Route path='/profile' component={Profile} />
        </ScrollToTop>
      </Switch>
    </UserContext.Provider>
  </HashRouter>

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


