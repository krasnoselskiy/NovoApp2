import React from 'react';
import styled from '@emotion/styled'

const About = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }
`

const AboutComponent = () => {
  return (
    <About>
      <h2>AboutComponent</h2>
    </About>
  );
}

export default AboutComponent;
