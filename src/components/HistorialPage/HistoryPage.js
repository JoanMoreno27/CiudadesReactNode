import { useContext } from "react"
import { NavLink } from "react-router-dom";
import Context from "../../context/CiudadesContext"
import "./Hist.css"

/**
 * Componente que se utiliza como path en el router a la página de historial donde se muestran las busquedas hechas anteriormente 
 * Para hacer el historial se utiiza un Context de react el cual tiene un ContextProvider que envuelve a todo el router y esta mas explicado en CiudadesContext.js
 * @returns página de historial con botones para volver a cada una de las busquedas
 */
export default function HistoryPage() {
    const { historial } = useContext(Context)
    return (
        <>
            {
                historial[0] == null ?
                    <div>Historial vacío</div> :
                    <div className="res">
                        {historial.map((his, key) => {
                            return (
                                <div key={key} >
                                    {
                                        <div className="hist"><NavLink exact to={{
                                            pathname: "/",
                                            state: { cargar: his }
                                        }} className="goSearch">{his["post code"]}</NavLink><div className="histData"> {his.places[0]["place name"]} ({his.places[0]["state"]})</div></div>
                                    }
                                </div>
                            );
                        })
                        }
                    </div>
            }

        </>
    )
}