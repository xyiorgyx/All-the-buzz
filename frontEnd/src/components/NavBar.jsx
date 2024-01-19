import { Link } from 'react-router-dom'

function NavBar() {
  return (
   <nav>
        <link to='/'></link>
        <ul>
            <link to='/login'><li>Login</li></link>
            <link to='/sihnup'><li>signUp</li></link>
        </ul>
   </nav>
  )
}

export default NavBar