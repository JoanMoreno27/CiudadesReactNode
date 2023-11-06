import { useState} from "react"
import React from "react"

export const Context = React.createContext()

/**
 * Context que guarda las busquedas que se realizan de diferentes códigos postales a modo de historial para utilizarlos en el componente HistoryPage
 * @param {*} param0 
 * @returns ContextProvider con el acceso a la variable historial = el historial en si, parte de un useState, y addHist = funcion que agrega una busqueda a este historial
 */
export function CiudadesContextProvider({children}){
    const [historial, setHistorial] = useState([])

    const addHist =(ciudad)=>{
        if(ciudad != null){
          setHistorial(historial.concat(ciudad))
        }
    }

    return <Context.Provider value={{historial, addHist}}>
        {children}
    </Context.Provider>
}

export default Context