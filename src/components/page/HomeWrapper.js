import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import { useEffect } from "react"


const HomeWrapper = ({ setCurrentUser, currentUser }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!currentUser){
      navigate('/auth/login')
    }
  }, [currentUser])
  return (
    <div>
        <NavBar {...{setCurrentUser, currentUser}} />
        <Outlet />
    </div>
  )
}

export default HomeWrapper