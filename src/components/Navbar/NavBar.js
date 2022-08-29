import logo from '../../logo.svg'
import CartWidget from '../CartWidget/CartWidget'
import './style.css'
const NavBar = () => {
    return(
        <div className="container">
            <div className="img">
                <img widht={'100px'} height={'100px'} src={logo} alt="logo" />
            </div>
            <div  className="mora"><h1>Mora Cafeteria</h1></div>
            <div className="as">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Productos</a></li>
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