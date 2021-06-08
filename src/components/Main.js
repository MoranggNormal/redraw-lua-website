import React from 'react'
import styled from 'styled-components'

const MAIN = styled.main`
width: 75vw;
height: 68vh;
margin: 3rem auto;
padding: 1rem;
background-color: #1f3c88;
color: #232323;
font-family: 'Open Sans', sans-serif;
font-weight: 200;
border-radius: 2px;
box-shadow: 0px 0px 1px 2px #ccc;
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
