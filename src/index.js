import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import * as serviceWorker from './utils/serviceWorker'

import './styles/globalStyles.css'
import './styles/sidebar.css'


render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.unregister()
