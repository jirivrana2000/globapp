import "../styles/NavBar.css"
import Bag from "./Bag"
import { NavLink } from "react-router-dom"
import NavBarLogo from "../img/NavBarLogo.png"

const NavBar = ({order}) => {
    return (
        <header>
            <div className="headerContainer">
                <div className="logoContainer">
                    <img className="navBarImg" src={NavBarLogo} alt="" />
                    <h1>Jídlo domů.cz</h1>
                </div>
              {  <Bag order={order} />}
            </div>
            <nav className="navBarContainer">
                <NavLink to="/" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Domů</NavLink><br />
                <NavLink to="/pizza" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Pizza</NavLink><br />
                <NavLink to="/burger" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Burger</NavLink><br />
                <NavLink to="/minutky" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Minutky</NavLink><br />
                <NavLink to="/prilohy" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Přílohy</NavLink><br />
                <NavLink to="/omacky" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Omáčky</NavLink><br />
            </nav> 
        </header>
    )
}

export default NavBar