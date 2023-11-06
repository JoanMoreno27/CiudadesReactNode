import "./InfoGeo.css"

/**
 * Componente con la información geográfica que se mostrará dentro de un componente CardTitle
 * @param {*} param0 
 * @returns El contenido de la card información geográfica
 */
export default function InfoGeo({ ciudad }) {
    
    /**
     * El if que comprueba si se dispone de los parametros del Json recibido de la api necesarios para evitar que pete la página
     */
    if (ciudad == undefined || ciudad.latitude == undefined || ciudad.longitude == undefined) {
        return (
            <></>
        )
    }
    else {
        const url = `https://www.google.com/maps/@${ciudad.latitude},${ciudad.longitude},15z`
        return (
            <div className="flex-container-geo">
                <div>
                    <b>Latitud: </b>{ciudad.latitude}<br />
                    <b>Longitud: </b>{ciudad.longitude}
                </div>
                <a href={url} target="blank" className="maps">
                    Ver mapa
                </a>
            </div>
        );
    }
}