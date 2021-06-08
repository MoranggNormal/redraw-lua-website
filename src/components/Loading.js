import React from 'react'
import styled from 'styled-components'

const LOADING = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: #2978b5;
  display: grid;
  place-items: center;
`

const Loading = () => {
  return (
    <LOADING>
    <span className="load"></span>
     </LOADING>
  )
}

export default Loading
