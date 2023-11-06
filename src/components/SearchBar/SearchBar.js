import {useState} from "react";
import "./SearchBar.css";

/**
 * Componente que hace de input para recojer el código postal que se quiere introducir y enviar los datos a el componente SearchPage donde se produce y gestiona la llamada a la Api
 * @param {*} param0 
 * @returns input y botón para recibir el código postal
 */
export default function SearchBar({buscarCiudad}){
    const [busqueda, setBusqueda] = useState("")
    const [error, setError] = useState(null)

    //función que va registrando lo que se introduce en el input
    function buscar(e){
        const valor = e.target.value
        setBusqueda(valor)
    }
    
    //funcion que se llama al apretar el botón y que si el código postal introducido es válido se lo envia a SearchPage
    function handleBuscarCiudad(e){
        e.preventDefault()
        setError(checkErrors(e))
        console.log(error)
        if(error == null || error == undefined){
            console.log(error)
            buscarCiudad(busqueda)
        }
    }

    //función que comprueba si el código postal introducido es válido
    function checkErrors(e){
        if(busqueda.length == 0){
            return "Se debe introducir un código postal"
        }
        if(isNaN(busqueda) == true){
            return "El código postal debe ser númerico"         
        }
        if(busqueda.length != 5){
            return "El código postal debe tener 5 dígitos"
        }
    }

    return(
        <>
        <form onSubmit={handleBuscarCiudad} className="SearchBar">
            <input className="me-2" type={"text"} onChange={buscar} style={{width: "100%", marginLeft:"10px"}}></input>
            <button className="px-5" style={{color: "white", backgroundColor: "rgb(102, 47, 168)", border:"none", borderRadius:"5px", marginLeft:"30px"}}>Buscar</button>
        </form>
        {
            error == null?
            <></>:
            <div className="ms-2 text-danger">{error}</div>
        }  
        </> 
    );
}