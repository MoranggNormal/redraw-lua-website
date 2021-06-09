import React from 'react'
import styled from 'styled-components'

const MAIN = styled.main`
  width: 75vw;
  height: 68vh;
  margin: 3rem auto;
  padding: 1rem;
  background: rgba( 216, 227, 231, 0.10 );
  box-shadow: 0 8px 16px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  color: #142850;
  font-family: 'Open Sans', sans-serif;
  font-weight: 200;
  display: flex;
`

const Main = ({children}) => {
  return (
    <MAIN>
    {children}
    </MAIN>
  )
}

export default Main
