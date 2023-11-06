import { useState } from "react";
import "./CardTitle.css"

/**
 * Componente que forma el "cuerpo" de una card, es decir un "banner" con su titulo y el botón de minimizar, su contenido 
 * llamando a un subcomponente (InfoClima,InfoGeo,InfoPolitica) y su respectivo css
 * @param {*} param0 
 * @returns el cuerpo de la card con al información de su children que se pasa en el componente SearchPage
 */
export default function CardTitle({children ,nombre}){

    //variable y método que controlan si la card está minimizada o no
    const [visible,setVisible] = useState(true);
    function changeVisible(){
        setVisible(!visible)
    }

    //antes del return se comprueba que tiene los datos necesarios para mostrarlo, en este caso el componente children con la información
    if(!children){
        <></>
    }else{
        return(
            <div className="containerCardTitle">
                <div className="titulo">{nombre}<button className="minim" onClick={changeVisible}>{visible?"X": "_"}</button></div>
                <div className="containerInfo">
                {visible ==true?
                    children:<></>
                }
                </div>
            </div>
        );
    }
} 