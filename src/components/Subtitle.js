import styled from 'styled-components'

const SUBTITLE = styled.h2`
  font-size: 1.1rem;
  color: #142850;
  font-weight: 400;
`

const subtitle = ({children}) => {
  return (
    <SUBTITLE> {children} </SUBTITLE>

  )
}

export default subtitle
