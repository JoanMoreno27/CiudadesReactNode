import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import Chart from 'chart.js/auto';

/**
 * InfoClima es la informacion que se muestra dentro de un componente CardTitle de los datos relacionados con el clima recibidos en el Json que nos devuelve la Api
 * @param {*} param0 
 * @returns Div con la informacion de la cardy dentro una Chart de la libreria Chart.js para crear un diagrama de barras
 */
export default function InfoClima({ ciudad, children }) {

    const [clima, setClima] = useState()

    /**
     * Fetch a la api open-meteo para recibir la temperatura por horas en formato JSON y elaborar el diagrama de barras chartjs
     */
    function getDatosClima() {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.latitude}&longitude=${ciudad.longitude}&hourly=temperature_2m`
        fetchClima(url)
    }

    const fetchClima = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                setClima(response)
                console.log(response)
            })
            .catch(error => console.log(error))
    }

    /**
     * Use effect que evita que se repita el fetch y por lo tanto las llamadas innecesarias a la api
     */
    useEffect(() => {
        if (clima == undefined) {
            getDatosClima();
        }
    }, [])

    /**
     * return que primero comprueba que los datos de la card esten disponibles para evitar que falle el programa y no muestre nada
     */
    if (ciudad == undefined || ciudad.latitude == undefined || ciudad.longitude == undefined) {
        return (
            <></>
        )
    }
    else {
        return (
            <div className="infoClima">
                {
                    clima == null ?
                        <div>CARGANDO</div> :
                        <Bar data={{
                            labels: clima["hourly"]["time"],
                            datasets: [{
                                label: "Temperatura",
                                backgroundColor: "rgb(102, 47, 168)",
                                borderColor: 'black',
                                borderWidth: 1,
                                data: clima["hourly"]["temperature_2m"]
                            }]
                        }} options={{
                            maintainAspectRatio: false,
                            responsive: true
                        }} />
                }
            </div>
        );
    }

}