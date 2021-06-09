import styled from 'styled-components'

const TITLE = styled.h1`
  font-size: 1.7rem;
  color: #142850;
`


const title = ({children}) => {
  return (
    <TITLE> {children} </TITLE>
  )
}

export default title
