import {useState, useEffect} from "react";
import InfoClima from "../CardClima/InfoClima";
import InfoGeo from "../CardGeo/InfoGeo";
import InfoPolitica from "../CardPolitica/InfoPolitica";
import SearchBar from '../SearchBar/SearchBar';
import "../../App.css";
import { useContext } from "react";
import Context from "../../context/CiudadesContext";
import CardTitle from "../Cards/CardTitle";
import { useLocation } from "react-router-dom";
import { UseFetchCiudad } from "../../hooks/UseFetchCiudad";

/**
 * Componente que hace de página principal o pagina de busqueda, la que contiene el SearchBar por donde se recibirá un código postal
 * que se devolverá a este componente el cual hará una llamada a la api utilizando el hook personalizado useFetchCiudad y renderiza 
 * las cards que contienen la información recibida del fetch
 * @param {*} props 
 * @returns la página de busqueda en la cual si no se ha introducido nada solo tiene el componente SearchBar y si ya se ha buscado
 * un código postal también los componentes CardTitle que contendrán la información de la Api
 */
export default function SearchPage(props){
    //addHist con el que guardamos cada una de las busquedas en el contexto CiudadesContext para el historial
    const {addHist} = useContext(Context)
    //location para cargar un códgio postal desde el historial
    let location = useLocation();
    //doFetchCiudad = funcion con el hook personalizado en el que se hace el fetch a la api, data = la variable con el json, isLoading = boolean para saber si ha acabado el fetch o no
    const {doFetchCiudad, data, isLoading} =  UseFetchCiudad();
    
    function handleCodigoPostal(codigoPostal){
      doFetchCiudad(codigoPostal)
      if(data != null){
        addHist(data)
      }
    }

    //UseEffect que comprueba si se viene de un objeto del historial y por lo tanto en la location del objeto habrá un post code para hacer el fetch sin tener que buscarlo otra vez
    useEffect(()=>{
      if(location.state != null){
        if(location.state.cargar["post code"] != undefined){
          handleCodigoPostal(location.state.cargar["post code"])
        }
      }
    },[])
 
    return(
    <>
        <div className="flexContainer">
          <SearchBar buscarCiudad={handleCodigoPostal}></SearchBar>
          {
            isLoading!=null && data && isLoading!=true && data.places?
            <>
            <CardTitle nombre={"Información Política"}>
                <InfoPolitica ciudad={data.places[0]}/>
              </CardTitle>
              <CardTitle nombre={"Información Climática"}>
                <InfoClima ciudad={data.places[0]}/>
              </CardTitle>
              <CardTitle nombre={"Información geográfica"}>
                <InfoGeo ciudad={data.places[0]}/>
              </CardTitle>
            </>:
            <></>
          }
        </div>
    </>
    )
}