import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/lua.svg'

const IMG = styled.img`
  width: 5rem;
  height: 5rem;
  margin-left: 3.3rem;
`

const HEADER = styled.header`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem;
  background-color: #F2F2F2;
  box-shadow: 0px 1px 2px 1px #ccc;

`

const NAV = styled.nav`
  display: flex;
  justify-content: space-around;
`

const ACTIVE = {
  color: '#03256c',
  borderBottom: '1px solid #03256c'
}

const Header = () => {
  return (
    <HEADER>

    <Link to="/"> <IMG src={logo} alt="lua icon" /> </Link>

    <NAV>
    <NavLink to="about" className="link" activeStyle={ACTIVE}>About</NavLink>
    <NavLink to="news" className="link" activeStyle={ACTIVE}>News</NavLink>
    <NavLink to="get-started" className="link" activeStyle={ACTIVE}>Get started</NavLink>
    <NavLink to="download" className="link" activeStyle={ACTIVE}>Download</NavLink>
    <NavLink to="docs" className="link" activeStyle={ACTIVE}>Documentation</NavLink>
    <NavLink to="Community" className="link" activeStyle={ACTIVE}>Community</NavLink>
    <NavLink to="site-map" className="link" activeStyle={ACTIVE}>Site map</NavLink>
    </NAV>

    </HEADER>
  )
}

export default Header
