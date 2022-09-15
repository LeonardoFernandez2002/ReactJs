import logo from '../../Media/LOGO.png'
import CartWidget from '../CartWidget/CartWidget'
import './style.css'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    return(
        <div className="container">
            <div className="img">
                <img widht={'50px'} height={'50px'} src={logo} alt="logo" />
            </div>
            <div className="as">
                <ul>
                    <li><NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/">Inicio</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/contacto">Contacto</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/catalogo">Catalogo</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/productos/camisas">Camisas</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive ? "clase1" : "clase2"} to="/catalogo/zapatos">Zapatos</NavLink></li>
                    
                </ul>
            </div>
            <div className="boton"><button>Login</button></div>
            <div>
                 <a href="#"><CartWidget/></a>
            </div>
        </div>
        
    )
}

export default NavBar;