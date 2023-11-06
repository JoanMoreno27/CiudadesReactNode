import Ciudad from "../../assets/images/miscalenea/logo.png"
import "./Navbar.css"
import { BrowserRouter, NavLink,Link } from "react-router-dom";

/**
 * Navbar de la página principal que se renderiza en el App y con los botones para cambiar de página o ruta
 * @returns El navbar con Navlinks a cada una de las rutas y el titulo 
 */
function Navbar(){
    return(
        <div className="navBar" >           
            <img src={Ciudad} alt="logo" className="imgCit" width={150} height={100}></img>
            <h1 className="ciudades">Ciudades</h1>
            <div className="botonesDiv">        
            <NavLink exact to="/" className="botonBuscar" activeClassName="activo">Buscar</NavLink>
            <NavLink exact to="history" className="botonHistorial" activeClassName="activo">Historial</NavLink>
            </div>   
        </div>
    );
}

export default Navbar