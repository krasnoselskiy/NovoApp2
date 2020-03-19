import React, { Component } from 'react'
import CounterContainer from './CounterContainer'
import PropTypes from 'prop-types'
import ActionTypes from '../constants/actionTypes'
import { connect } from 'react-redux'

export default class AppContainer extends Component {
  componentDidMount() {

  }


  render() {
    return (
      <div>
        <h1>AppContainer</h1>

        <CounterContainer />
      </div>
    )
  }
}
