import React from 'react'
import Header from '../components/Header'
import AlbumListContainer from '../containers/AlbumListContainer'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={AlbumListContainer} />
      </Switch>
    </Router>
  )
}

export default Routes
