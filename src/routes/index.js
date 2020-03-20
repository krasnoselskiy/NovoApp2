import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';
import { createBrowserHistory } from 'history'

import Header from '../components/Header'
import SidebarMenu from '../components/SidebarMenu'
import AboutComponent from '../components/AboutComponent'
import AlbumListContainer from '../containers/AlbumListContainer'

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <div id="outer-container">
          <SidebarMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} history={history} />
          <div id="page-wrap">
            <Header />

            <Switch>
              <Route path="/about">
                <AboutComponent />
              </Route>
              <Route path="/">
                <AlbumListContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </AnimatedSwitch>
    </Router>
  )
}

export default Routes
