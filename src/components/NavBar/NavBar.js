import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { IMAGES } from '../../img'


const NavBar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div className='nav_div'>
        <ul>
        <img onClick={handleClick} src={IMAGES.logo} />

            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/myposts'}>Posts</NavLink></li>
            <li><NavLink to={'/newposts'}>Add</NavLink></li>
            <li><NavLink to={'/login'}>Login</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar