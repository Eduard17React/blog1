import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { IMAGES } from '../../img'


const NavBar = ({setCurrentUser}) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    const handleClickOut = () => {
      setCurrentUser(null)
    }

  return (
    <div className='nav_div'>
        <ul>
        <img onClick={handleClick} src={IMAGES.logo} />

            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/myposts'}>Posts</NavLink></li>
            <li><NavLink to={'/newposts'}>Add</NavLink></li>
            <button className='btn_out' onClick={handleClickOut}>Log Out</button>
        </ul>
    </div>
  )
}

export default NavBar