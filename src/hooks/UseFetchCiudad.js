import { UseFetch } from "./UseFetch"
/**
 * Hook personalizado que llama a la api zippopotam mediante el sub-hook personalizado UseFetch con el código postal recibido mediante el componente SearchPage 
 * @returns deFetchCiudad = función que llama al fetch con los datos y que se exporta a SearchPage, data = objeto que guarda el objeto JSON recibido desde UseFetch()
 * isLoading = boolean que comprueba si sigue cargando, hasError = boolean para comprobar si ha dado error el fetch
 */
export const UseFetchCiudad = () =>{
    const {fetchurl, data , isLoading, hasError} = UseFetch();

    const doFetchCiudad = (codigoPostal) =>{
        const url = "https://api.zippopotam.us/es/"+codigoPostal
        fetchurl(url);
    };

    return{
        doFetchCiudad,
        data,
        isLoading,
        hasError
    }
} 