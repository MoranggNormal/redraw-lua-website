import styled from 'styled-components'

const SUBTITLE = styled.h2`
  font-size: 1.1rem;
  color: #F2F2F2;
  font-weight: 400;
`

const subtitle = ({children}) => {
  return (
    <SUBTITLE> {children} </SUBTITLE>

  )
}

export default subtitle
