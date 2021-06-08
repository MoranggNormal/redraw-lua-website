import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MAIN from '../components/Main'
import TITLE from '../components/Title'
import SUBTITLE from '../components/Subtitle'
import TEXT from '../components/Text'
import LUA from '../assets/images/luamain.svg'

const SECTION = styled.section`
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  padding: 1rem;
  width: 50%;
`
const SECTION_IMG = styled.section`
  display: grid;
  place-items: center;
  padding: 1rem;
  width: 50%;
`

const IMG = styled.img`
  padding: 0.5rem;
  width: 24rem;
`


const Home = () => {

  return (
    <MAIN>
      <SECTION_IMG>

        <IMG src={LUA} alt="LUA" />

      </SECTION_IMG>

    <SECTION>
    <TITLE>
      Lua, the Scripting Language.
    </TITLE>
    <SUBTITLE>
      Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.
    </SUBTITLE>

    <TEXT>
      Lua combines simple procedural syntax with powerful data description constructs based on associative arrays and extensible semantics. Lua is dynamically typed, runs by interpreting bytecode with a register-based virtual machine, and has automatic memory management with incremental garbage collection, making it ideal for configuration, scripting, and rapid prototyping.
    </TEXT>

    <TEXT>
      <Link style={{color: '#F2F2F2', transition: '0.3s'}} to="get-started">Get started by now, Click here!</Link>
    </TEXT>
   </SECTION>

    </MAIN>
  )
}

export default Home
