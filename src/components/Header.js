import React from 'react'
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

const TopLine = styled.div`
  padding: 35px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.3;
  z-index: 1;
  transition: all 800ms ease-in;

  :hover {
    opacity: 1;
    background: #ccc;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`

function Header() {
  return (
    <TopLine>
      <div className="container">
        <Link to='/'>
          <h1>Alex Novikov</h1>
        </Link>
      </div>
    </TopLine>
  )
}

export default Header
