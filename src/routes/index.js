import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import { createBrowserHistory } from 'history'

import Header from '../components/Header'
import SidebarMenu from '../components/SidebarMenu'
import AboutComponent from '../components/AboutComponent'
import AlbumComponent from '../components/AlbumComponent'
import AlbumListContainer from '../containers/AlbumListContainer'

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <div id="outer-container">
        <SidebarMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} history={history} />
        <div id="page-wrap">

          <Switch>
            <Route path="/albums/:id">
              <AlbumComponent />
            </Route>
            <Route path="/about">
              <AboutComponent />
            </Route>
            <Route path="/">
              <AlbumListContainer />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default Routes
