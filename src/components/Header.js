import React from 'react'
import logo from '../assets/logo.svg'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopLine = styled.div`
  background-color: #222;
  padding: 20px;
  color: #fff;
  text-align: center;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 80px;
  }
`

function Header() {
  return (
    <TopLine>
      <div className="container">
        <img src={logo} className="redux-logo" alt="logo" />
        <h2>Welcome to Create Redux App</h2>
      </div>
    </TopLine>
  )
}

export default Header
