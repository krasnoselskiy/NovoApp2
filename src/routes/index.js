import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { TransitionGroup, CSSTransition } from "react-transition-group";

import SidebarMenu from '../components/SidebarMenu'
import AlbumListContainer from '../containers/AlbumListContainer'
import AlbumContainer from '../containers/AlbumContainer'
import AuthorContainer from '../containers/AuthorContainer'

export const history = createBrowserHistory()

function Routes({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={{ enter: 300, exit: 300 }}
      >
        <Router history={history}>
          <div id="outer-container">
            <SidebarMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} history={history} />

            <div id="page-wrap">
              <Switch>
                <Route path="/albums/:id">
                  <AlbumContainer />
                </Route>
                <Route path="/about">
                  <AuthorContainer />
                </Route>
                <Route path="/">
                  <AlbumListContainer />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </CSSTransition>
    </TransitionGroup>



  )
}

export default Routes
