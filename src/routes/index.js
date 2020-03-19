import React from 'react'
import Header from '../components/Header'
import AlbumListContainer from '../containers/AlbumListContainer'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import styled from '@emotion/styled'

export const history = createBrowserHistory()


function Routes() {
  return (
    <Router history={history}>
      <Header />

      <Switch>
        <Route path="/" component={AlbumListContainer} />
      </Switch>
    </Router>
  )
}

export default Routes
