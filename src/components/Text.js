import styled from 'styled-components'

const TEXT = styled.p`
  font-size: 1.1rem;
  color: #F2F2F2;
  font-weight: 400;
`


const text = ({children}) => {
  return (
    <TEXT> {children} </TEXT>

  )
}

export default text
