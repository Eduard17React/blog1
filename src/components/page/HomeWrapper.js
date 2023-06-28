import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"


const HomeWrapper = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default HomeWrapper