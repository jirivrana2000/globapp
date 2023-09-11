import "../styles/NavBar.css"
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <header>
            <div className="headerContainer">
                <h1 className="main">Aplikace pro správu projektů</h1>
                
            </div>
            <nav className="navBarContainer">
                <NavLink to="/novyprojekt" className="nonactiveLink" id="form" >+</NavLink><br />
                <NavLink to="/" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Projekty</NavLink><br />
                <NavLink to="/prace" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Práce</NavLink><br />
                <NavLink to="/skola" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Škola</NavLink><br />
                <NavLink to="/osobni" className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink" } >Osobní</NavLink><br />
            </nav> 
        </header>
    )
}

export default NavBar