import { useState } from "react"

/**
 * Hook personaliado con la estructura de un hook que es llamado por UseFetchCiudad y se podria reutilizar si hubiesen mas fetchs en hooks personalizados
 * @returns devuelve fetchurl = el método con el que se puede llamar a este fetch, data = la variable con la respuesta de la api, isLoading = boolean que
 * comprueba si sigue cargando, hasError = boolean para comprobar si ha dado error el fetch
 */
export const UseFetch = () => {
    const[data,setData] = useState(null)
    const[isLoading,setIsLoading] = useState(null)
    const[hasError,setHasError] = useState(false)

    const fetchurl = (url) => {
        setIsLoading(true);
        setHasError(false);
        setData({});
        fetch(url)
            .then(response => response.json())
            .then((response) =>{
                setData(response);
                setIsLoading(false)
            })
            .catch((err) =>{
                setIsLoading(false)
                setHasError(true)
            })
    }
    
    return{
        fetchurl,
        data,
        isLoading,
        hasError,
    }
}