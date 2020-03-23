import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { TransitionGroup, CSSTransition } from "react-transition-group";

import SidebarMenu from '../components/SidebarMenu'
import AlbumListContainer from '../containers/AlbumListContainer'
import AlbumContainer from '../containers/AlbumContainer'
import AuthorContainer from '../containers/AuthorContainer'

export const history = createBrowserHistory()

function Routes() {
  return (
        <Router history={history}>
          <div id="outer-container">
            <SidebarMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} history={history} />

            <div id="page-wrap">
              <Route render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                    <Switch location={location}>
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
                  </CSSTransition>
                </TransitionGroup>
              )} />
            </div>
          </div>
        </Router>
)}

export default Routes
