import "./InfoPolitica.css"
import { useEffect, useState } from "react"
import AN from "../../assets/images/flags/band.gif"
import AR from "../../assets/images/flags/bara.gif"
import CT from "../../assets/images/flags/bcat.gif"
import O from "../../assets/images/flags/bast.gif"
import IB from "../../assets/images/flags/bbal.gif"
import CN from "../../assets/images/flags/bcnr-300x200.png"
import S from "../../assets/images/flags/bcnt.gif"
import CL from "../../assets/images/flags/bcyl.gif"
import CM from "../../assets/images/flags/bclm2.gif"
import VC from "../../assets/images/flags/bval.gif"
import EX from "../../assets/images/flags/bext.gif"
import GA from "../../assets/images/flags/bgal.gif"
import M from "../../assets/images/flags/bmad.gif"
import MU from "../../assets/images/flags/bmur.gif"
import NA from "../../assets/images/flags/bnav.gif"
import PV from "../../assets/images/flags/beus.gif"
import LO from "../../assets/images/flags/briojasin.png"
import CE from "../../assets/images/flags/bceu.gif"
import ML from "../../assets/images/flags/bmel.gif"

/**
 * Componente que contiene la información que se mostrara dentro de otro componente CardTitle que hará de Información Política
 * @param {*} param0 
 * @returns el contenido de la card con la información política
 */
export default function InfoPolitica({ ciudad = [] }) {
    /**
     * creamos un objeto con todas las banderas posibles para despues poder usarlo de referencia y comparar el estado con el objeto JSON y encontrar la imagen en los imports
     */
    const [img, setImg] = useState()
    const banderas = {}
    banderas["AN"] = AN
    banderas["CT"] = CT
    banderas["AR"] = AR
    banderas["O"] = O
    banderas["IB"] = IB
    banderas["CN"] = CN
    banderas["S"] = S
    banderas["CL"] = CL
    banderas["CM"] = CM
    banderas["VC"] = VC
    banderas["EX"] = EX
    banderas["GA"] = GA
    banderas["M"] = M
    banderas["MU"] = MU
    banderas["NA"] = NA
    banderas["PV"] = PV
    banderas["LO"] = LO
    banderas["CE"] = CE
    banderas["ML"] = ML

    /**
     * UseEffect que cuando se renderiza el componente busca la bandera y acutaliza el useState que referencia a la imagen con la bandera correspondiente
     */
    useEffect(() => {
        if(ciudad["state abbreviation"] != undefined){
            buscarImg(ciudad["state abbreviation"])
        }
    })
    function buscarImg(estado) {
        setImg(banderas[estado])
    }

    /**
     * El if que comprueba si se dispone de los parametros del Json recibido de la api necesarios para evitar que pete la página
     */
    if (ciudad == undefined || ciudad["state abbreviation"] == undefined ) {
        return (
            <></>
        )
    } else {
        return (
            <div className="flex-container-po">
                <img src={img} alt="flag" className="bandera" ></img>
                <div><b>Ciudad:</b> {ciudad["place name"]}<br />
                    <b>Comunidad:</b> {ciudad.state}, {ciudad["state abbreviation"]}</div>
            </div>
        );
    }

}