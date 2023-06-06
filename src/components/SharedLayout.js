import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const SharedLayout = ({order}) => {
    return (
        <>
            <NavBar order={order}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout